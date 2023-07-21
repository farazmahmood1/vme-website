import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'
import { saveAs } from "file-saver";
import allImagesUrl from '../SourceFiles/baseimageurl';
import coverImage from '../SourceFiles/heading-bg.jpg'
import { Modal } from 'pretty-modal'
import { toast } from 'react-toastify';
import MainLogo from '../../Components/SourceFiles/images/MainLogo.png'
import UserProfileEdit from '../Modal/UserProfileEdit';
import axios from 'axios';

const UserProfile = (id) => {

  const Id = id.id

  const [userID, setUserID] = useState()
  const [buyItems, setBuyItems] = useState('')
  const [editProfileModal, setProfileModal] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [purchasedProduct, setPurchased] = useState("")

  const [userData, setUserData] = useState('')
  const [profile, setProfile] = useState("userProfile")
  const [loader, setLoader] = useState(false)

  // Images
  const [file, setFile] = useState('');
  const [datas, setDatas] = useState([])

  useEffect(() => {
    SetLocalLogin();
    showSubscribtionButton();
    profileData();
    getImages();
    topFunction();
  }, [])

  const SetLocalLogin = async () => {
    try {
      let user = await localStorage.getItem("user");
      let parsed_user = JSON.parse(user);
      if (parsed_user) {
        setUserID(parsed_user.id)
        setBuyItems(parsed_user.is_purchased);
      }
    } catch {
      return null;
    }
  };

  const showSubscribtionButton = () => {
    if (buyItems === "0") {
      setOpenModal(true)
    }
    else {
      setOpenModal(false)
    }
  }

  const profileData = () => {
    setLoader(true)
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch(`${Baseurl}fetch_webdata_by_userid/${String(Id)}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setLoader(false)
        setUserData(result.Data)
        setPurchased(result.Data.is_purchased)

      })
      .catch(error => console.log('error', error));
  }

  // post images

  const postImages = () => {
    if (!file) {
      toast.warn('Please select a file')
    }
    else {
      var formdata = new FormData();
      formdata.append("image", file, "[PROXY]");
      formdata.append("user_id", userID);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(`${Baseurl}post_image`, requestOptions)
        .then(response => response.json())
        .then(result => {
          toast.info('Image uploaded successfully')
          console.log(result)
          setInterval(() => {
            window.location.reload();
          }, 1500);
        })
        .catch(error => {
          toast.warn('Error while uploading image')
          console.log('error', error)
        });
    }
  }

  // get images of the user
  const getImages = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${Baseurl}get_image/${String(Id)}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setDatas(result.Data)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  // delete images of the user
  const deleteImage = (id) => {
    axios.post(`${Baseurl}delete_image/${id}`)
      .then((res) => {
        console.log(res)
        toast.warn('Image deleted successfully')
        setInterval(() => {
          window.location.reload()
        }, 1500);
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error while deleting image')
      })
  }

  // show social button
  const showSocials = () => {
    if (purchasedProduct === "1") {
      return (
        <>
          <div className='col-lg-5 mx-auto'>

            {
              userData.phone !== '' ?
                <a href={`${userData.phone}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-whatsapp" /></p>
                    <p className='text-white ms-auto mt-1'>My Whatsapp no.</p>
                  </div>
                </a>
                : null
            }

            {
              userData.facebook !== '' ?
                <>
                  <a href={`${userData.facebook}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-facebook" /></p>
                      <p className='text-white ms-auto mt-1'>My Facebook Account</p>
                    </div>
                  </a>
                </> :
                null

            }

            {
              userData.instagram !== '' ?
                <>
                  <a href={`${userData.instagram}`} target="_blank" >
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-instagram" /></p>
                      <p className='text-white ms-auto mt-1'>My Instagram Account</p>
                    </div>
                  </a>
                </> : null
            }

            {
              userData.twitter !== '' ?
                <>
                  <a href={`${userData.twitter}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-twitter" /></p>
                      <p className='text-white ms-auto mt-1'>My Twitter Account</p>
                    </div>
                  </a>
                </> : null
            }

            {
              userData.snapchat !== '' ?
                <>
                  <a href={`${userData.snapchat}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-snapchat" /></p>
                      <p className='text-white ms-auto mt-1'>My Snapchat Account</p>
                    </div>
                  </a>
                </> : null
            }

            {
              userData.tiktok !== '' ?
                <>
                  <a href={`${userData.tiktok}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-tiktok" /></p>
                      <p className='text-white ms-auto mt-1'>My tiktok Account</p>
                    </div>
                  </a>
                </> : null
            }


            {
              userData.skype !== '' ?
                <>
                  <a href={`${userData.skype}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-skype" /></p>
                      <p className='text-white ms-auto mt-1'>My Skype Account</p>
                    </div>
                  </a>
                </> : null
            }

            {
              userData.printest !== '' ?
                <>
                  <a href={`${userData.printest}`} target="_blank">
                    <div className='card-body d-flex mt-2 profileCard'>
                      <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-pinterest" /></p>
                      <p className='text-white ms-auto mt-1'>My Pinterest Account</p>
                    </div>
                  </a>
                </> : null
            }
          </div>
        </>
      )
    }
    else {
      return null
    }
  }

  // show about of the user
  const showAbout = () => {
    if (purchasedProduct === "1") {
      return (
        <>
          <div className="row mt-3">
            <div className="col-lg-5">
              <div className="section-heading">
                <div className="line-dec" />

                {userData.designation !== '' || userData.professional_desc !== '' ?
                  <>
                    <h1 className='mt-2'>Information about me</h1>
                  </>
                  : null
                }

                {
                  userData.designation !== '' ?
                    <>
                      <h3 className='mt-3' style={{ color: "#7453fc" }}>Designation:</h3>
                      <p className='mt-3'>{userData.designation}</p>
                    </>
                    :
                    null
                }


                {
                  userData.professional_desc !== '' ?
                    <>
                      <h3 className='mt-3' style={{ color: "#7453fc" }}>Description:</h3>
                      <p className='mt-3'>{userData.professional_desc}</p>
                    </>
                    :
                    null
                }

              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <div className="line-dec" />
                <h1 className='mt-2'>Contact me</h1>

                {
                  userData.phone !== '' ?
                    <>
                      <div className='d-flex mt-3'>
                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-phone" /></h2>
                        <p className='mt-3 ms-auto'>{userData.phone}</p>
                      </div>
                    </> : null
                }

                {
                  userData.cnic !== '' ?
                    <>
                      <div className='d-flex mt-3'>
                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-card" /></h2>
                        <p className='mt-2 ms-auto'>{userData.cnic}</p>
                      </div>
                    </> : null
                }

                {
                  userData.address !== '' ?
                    <>
                      <div className='d-flex mt-3'>
                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-book" /></h2>
                        <p className='mt-3 ms-auto ' style={{ textAlign: 'right' }}>{userData.address}</p>
                      </div>
                    </> : null
                }


                {
                  userData.region !== '' ?
                    <>
                      <div className='d-flex mt-3'>
                        <h2><i className="fa-solid fa-location-dot" style={{ color: "#7453fc" }} /> <span style={{ fontSize: '13px' }}></span></h2>
                        <p className='mt-2 ms-auto' style={{ textAlign: 'right' }} >{userData.region}</p>
                      </div>
                    </> : null
                }
              </div>
              {
                userData.cv ?
                  <button onClick={saveFile} className='buttonx w-25 p-3' >View CV</button> : null
              }
            </div>
          </div>
        </>
      )
    }
    else {
      return null
    }
  }

  // show professional describtions
  const showProfessional = () => {
    if (purchasedProduct === "1") {
      return (
        <>
          <div className="row">

            <div className="col-lg-6 mx-auto mt-4">
              <div className="section-heading">
                <div className="line-dec" />
                <h1 className='mt-2'>My Professional Accounts</h1>
                {
                  userData.gmail !== '' ?
                    <>
                      <a href={`${userData.gmail}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-solid fa-envelope" /></p>
                          <p className='text-white ms-auto mt-1'>My Email Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  userData.linkedin !== '' ?
                    <>
                      <a href={`${userData.linkedin}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-linkedin" /></p>
                          <p className='text-white ms-auto mt-1'>My LinkedIn Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  userData.github !== '' ?
                    <>
                      <a href={`${userData.github}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-github" /></p>
                          <p className='text-white ms-auto mt-1'>My Github Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  userData.stackoverflow !== '' ?
                    <>
                      <a href={`${userData.stackoverflow}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-stack-overflow" /></p>
                          <p className='text-white ms-auto mt-1'>My StackOverflow Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  userData.upword !== '' ?
                    <>
                      <a href={`${userData.upword}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard' style={{ height: "63px" }}>
                          <p style={{ color: "#7453fc" }}><img src="./source/assets/images/upwork.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                          <p className='text-white ms-auto mt-1'>My Upwork Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {userData.fiverr !== '' ?
                  <>
                    <a href={`${userData.fiverr}`} target="_blank">
                      <div className='card-body d-flex mt-2  profileCard' style={{ height: "63px" }}>
                        <p style={{ color: "#7453fc" }}> <img src="./source/assets/images/fiverr.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                        <p className='text-white ms-auto mt-1'>My Fiver Account</p>
                      </div>
                    </a>
                  </> : null
                }

              </div>
            </div>
          </div>
        </>
      )
    }
    else {
      return null
    }
  }

  // All user data of The user
  const ReturnData = () => {
    if (profile === 'userProfile') {
      return (
        <>
          <div>
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '20px' }} />
            <h2 className='mt-2 text-center'>My Social Accounts</h2>
            <div className='row mt-2'>
              {
                showSocials()
              }
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'Portfolio') {
      return (
        <>
          <div>
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '50px' }} />
            <h2 className='mt-2 text-center'>My Portfolio</h2>
            <div className="col-lg-12">
              <div className="row">

                {

                  purchasedProduct === "1" ?
                    datas.map((items) => {
                      return (
                        <>
                          <div className='col-lg-4 p-3'>
                            <img src={`${Imagesurl}${items.image}`} style={{ height: "350px", borderRadius: "10px" }} alt="" />
                            <div className='d-flex justify-content-center mt-2'>
                              {
                                userID == Id ?
                                  <button className='buttonx col-lg-4' onClick={() => deleteImage(items.id)} ><i className="fa-2x fa-solid fa-trash" style={{ cursor: 'pointer' }} /></button>
                                  : null
                              }
                            </div>
                          </div>
                        </>
                      )
                    }) : null
                }

                {
                  userID == Id && datas.length > 0 ? (
                    <>
                      <div className='col-lg-4 mt-3'>
                        <div className='second-upload-file mb-3' style={{ border : '2px dashed', borderColor: file ? 'green' : 'red' }}>
                          <input onChange={(e) => setFile(e.target.files[0])} type="file" />
                          <div className='content-icon'>
                            <i className='fa-solid fa-plus' />
                          </div>
                          <button className='text-center buttonx mt-3 col-lg-12' onClick={postImages} type="submit">Upload</button>
                        </div>
                      </div>
                    </>
                  ) : null
                }

                {
                  datas.length < 0 ? (
                    <>
                      <div className=''>
                        <div className='main-upload-file mb-3' style={{ border : '2px dashed', borderColor: file ? 'green' : 'red' }}>
                          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                          <p>Drag your files here or click in this area.</p>
                          <button className='text-center buttonx col-lg-12 mt-3' onClick={postImages} type="submit">Upload</button>
                        </div>
                      </div>
                    </>
                  ) : null
                }


              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'About') {
      return (
        <>
          <div style={{ marginTop: '50px' }}>
            {
              showAbout()
            }
          </div>
        </>
      )
    }
    else if (profile === 'Social') {
      return (
        <>
          <div style={{ marginTop: '50px' }}>
            {
              showProfessional()
            }
          </div>
        </>
      )
    }
    else {
      return null;
    }
  }

  // Save the CV
  const saveFile = () => {
    saveAs(`${Imagesurl}${userData.cv}`);
  };

  const openEditModal = () => {
    setProfileModal((prev) => !prev)
  }

  const copyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        toast.success("URL copied to clipboard", { theme: "dark" });
      })
      .catch((error) => {
        toast.warn("Failed to copy URL");
      });
  }

  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      mybutton = "block";
    } else {
      mybutton = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      {/* Modal */}
      <div>
        <Modal
          open={openModal}
        >
          <div>
            <div className="card-contentx">
              <div className="container">
                <div className="image">
                  <i className="fas fa-envelope" />
                </div>
                <h1 className='mb-2'>Subscribe</h1>
                <p className='mb-4'>Seems like your free trail for the Vme has ended, <br /> Please buy any item from the shop to access unlimited VME profile</p>
              </div>
              <div className="buttons d-flex justify-content-center">
                <div className="border-button me-1">
                  <Link to="/ShopMain?Card">Explore Shop</Link>
                </div>
                <div className="main-button ms-1">
                  <Link to="/WorkingVideo">How to buy</Link>
                </div>
              </div>
            </div>
          </div>

        </Modal>
      </div>

      <div className="CoverImage" style={{ backgroundImage: userData.cover_photo !== "" ? `url(${Imagesurl}${userData.cover_photo})` : "url(./source/assets/images/heading-bg.jpg)" }} />
      <div className="darkbg" style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)" }}>
        <div className="container">
          <div className='col-lg-1 buttonProfile'>
            <button onClick={() => setProfile("userProfile")} className={profile === 'userProfile' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></button>
            <button onClick={() => setProfile("Portfolio")} className={profile === 'Portfolio' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></button>
            <button onClick={() => setProfile("About")} className={profile === 'About' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></button>
            <button onClick={() => setProfile("Social")} className={profile === 'Social' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></button>
            <button onClick={copyUrl} className='btn hoverBtn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-copy p-2" /></button>
          </div>
        </div>
        {
          userID == Id ?
            <div className='container'>
              <button className='add-button btn buttonx rounded-pill me-2' onClick={openEditModal} style={{ color: "white", borderColor: "#7453fc" }} > <i className=' fa-solid fa-plus p-2' /> </button>
            </div> : null
        }

        <div className="row">
          <div className='d-flex'>
            <div>
              {
                userData.profile_photo ?
                  <img src={`${allImagesUrl}${userData.profile_photo}`} className='profileImage' alt="profile-image" /> : <img src={MainLogo} className='profileImage' alt="profile-image" />
              }
            </div>
            <div className='ms-4'>
              <p className='mt-3 fs-2' style={{ letterSpacing: '5px' }}>{userData.name}</p>
              <p className='fs-4 mt-1' style={{ color: 'gray', letterSpacing: '5px' }}><b>{userData.profession}</b></p>
            </div>

            {purchasedProduct === "0" ?
              <div className='ms-auto me-2'>
                <p>User is not active</p>
              </div> : null}

          </div>
          <div className='card border-line'>
            <div className='bio-container mx-auto mt-3'>
              {
                purchasedProduct === "1" ?
                  <>
                    <p style={{ color: '#7453fc' }} className='bio-heading'>Bio</p>
                    <div className='bio-box '>
                      <p style={{ letterSpacing: '2px' }}>{userData.bio}</p>
                    </div>
                  </> : null
              }
            </div>
          </div>
          {
            loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        {/* // <div className="loader">Loading...</div> */}
                        <div className="spinner-border spinner" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>
                <div>
                  <ReturnData />
                </div>
              </>
          }
        </div>
      </div>
      {
        userID ?
          <UserProfileEdit
            closeModal={openEditModal}
            editProfileModal={editProfileModal}
            userData={userData}
          /> : null
      }
    </div >
  )
}

export default UserProfile