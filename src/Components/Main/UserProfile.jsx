import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'
import { saveAs } from "file-saver";
import allImagesUrl from '../SourceFiles/baseimageurl';
import coverImage from '../SourceFiles/heading-bg.jpg'
import { useSearchParams, useParams } from 'react-router-dom';

const UserProfile = (id) => {
  const Id = id.id
  console.log(Id)
  // const params = useParams();
  // const { userId } = useParams()
  // const [searchParams, setSearchParams] = useSearchParams()

  // const location = useLocation()
  // const IDD = location.state.coustomerData;
  // console.log(IDD)

  // const location = useLocation()
  // const IDD = location.state.userDataa
  // console.log(location)

  // const queryParams = new URLSearchParams(window.location.search);
  // const id = queryParams.get('id');
  //   let { id } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)

  const [gender, setGender] = useState('')
  const [profDes, setProfDesc] = useState('')
  const [cover, setCover] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setEmail] = useState('')
  const [snapchat, setSnapchat] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [twitter, setTwitter] = useState('')
  const [github, setGithub] = useState('')
  const [facebook, setFacebook] = useState('')
  const [bio, setBio] = useState('')
  const [shortBio, setShortBio] = useState('')
  const [longBio, setLongBio] = useState('')
  const [cv, setCv] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [whatsappBusiness, setWhatsappBusiness] = useState('')
  const [telegram, setTelegram] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [skype, setSkype] = useState('')
  const [pintrest, setPintrest] = useState('')
  const [age, setAge] = useState('')
  const [religion, setReligion] = useState('')
  const [region, setRegion] = useState('')
  const [cnic, setCnic] = useState('')
  const [stackoverflow, setStackOverflow] = useState('')
  const [fiver, setFiver] = useState('')
  const [upwork, setUpwork] = useState('')
  const [address, setAdress] = useState('')
  const [profession, setProfession] = useState('')
  const [designation, setDesignation] = useState('')
  const [name, setName] = useState('')
  const [pic, setPic] = useState('')
  const [profile, setProfile] = useState('userProfile')
  const [loader, setLoader] = useState(false)

  const [datas, setDatas] = useState([])

  useEffect(() => {
    topFunction();
    profileData();
    getImages();
  }, [Id])

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
        console.log(result)
        setDesignation(result.Data.designation)
        setProfession(result.Data.profession)
        setAdress(result.Data.address)
        setUpwork(result.Data.upword)
        setFiver(result.Data.fiverr)
        setStackOverflow(result.Data.stackoverflow)
        setCnic(result.Data.cnic)
        setRegion(result.Data.region)
        setReligion(result.Data.religion)
        setAge(result.Data.age)
        setPintrest(result.Data.printest)
        setSkype(result.Data.skype)
        setTiktok(result.Data.tiktok)
        setTelegram(result.Data.telegram)
        setWhatsapp(result.Data.whatsapp)
        setWhatsappBusiness(result.Data.whatsapp_b)
        setCv(result.Data.cv)
        setLongBio(result.Data.long_des)
        setShortBio(result.Data.short_bio)
        setBio(result.Data.bio)
        setFacebook(result.Data.facebook)
        setGithub(result.Data.github)
        setTwitter(result.Data.twitter)
        setLinkedin(result.Data.linkedin)
        setInstagram(result.Data.instagram)
        setSnapchat(result.Data.snapchat)
        setEmail(result.Data.gmail)
        setPhone(result.Data.phone)
        setName(result.Data.name)
        setCover(result.Data.cover_photo)
        setPic(result.Data.profile_photo)
        setProfDesc(result.Data.professional_desc)
        setGender(result.Data.gender)

      })
      .catch(error => console.log('error', error));
  }

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

  const ReturnData = () => {
    if (profile === 'userProfile') {
      return (
        <>
          <div>
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '20px' }} />
            <h2 className='mt-2 text-center'>My Social Accounts</h2>
            <div className='row mt-2'>
              <div className='col-lg-5 mx-auto'>

                {
                  whatsapp !== '' ?
                    <a href={`${whatsapp}`} target="_blank">
                      <div className='card-body d-flex mt-2 profileCard'>
                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-whatsapp" /></p>
                        <p className='text-white ms-auto mt-1'>My Whatsapp no.</p>
                      </div>
                    </a>
                    : null
                }

                {
                  facebook !== '' ?
                    <>
                      <a href={`${facebook}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-facebook" /></p>
                          <p className='text-white ms-auto mt-1'>My Facebook Account</p>
                        </div>
                      </a>
                    </> :
                    null

                }

                {
                  instagram !== '' ?
                    <>
                      <a href={`${instagram}`} target="_blank" >
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-instagram" /></p>
                          <p className='text-white ms-auto mt-1'>My Instagram Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  twitter !== '' ?
                    <>
                      <a href={`${twitter}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-twitter" /></p>
                          <p className='text-white ms-auto mt-1'>My Twitter Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  telegram !== '' ?
                    <>
                      <a href={`${telegram}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-telegram" /></p>
                          <p className='text-white ms-auto mt-1'>My telegram Link</p>
                        </div>
                      </a>
                    </> : null
                }


                {
                  snapchat !== '' ?
                    <>
                      <a href={`${snapchat}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-snapchat" /></p>
                          <p className='text-white ms-auto mt-1'>My Snapchat Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  tiktok !== '' ?
                    <>
                      <a href={`${tiktok}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-tiktok" /></p>
                          <p className='text-white ms-auto mt-1'>My tiktok Account</p>
                        </div>
                      </a>
                    </> : null
                }


                {
                  skype !== '' ?
                    <>
                      <a href={`${skype}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-skype" /></p>
                          <p className='text-white ms-auto mt-1'>My Skype Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  pintrest !== '' ?
                    <>
                      <a href={`${pintrest}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-pinterest" /></p>
                          <p className='text-white ms-auto mt-1'>My Pinterest Account</p>
                        </div>
                      </a>
                    </> : null
                }

                {
                  mail !== '' ?
                    <>
                      <a href={`${mail}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-solid fa-envelope" /></p>
                          <p className='text-white ms-auto mt-1'>My Email Account</p>
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
    else if (profile === 'Portfolio') {
      return (
        <>
          <div>
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '50px' }} />
            <h2 className='mt-2 text-center'>My Portfolio</h2>
            <div className="col-lg-12">
              <div className="row">

                {
                  datas.map((items) => {
                    return (
                      <>
                        <div className='col-lg-4 p-3'>
                          <img src={`${allImagesUrl.itemImage}${items.image}`} style={{ height: "350px", borderRadius: "10px" }} alt="" />
                        </div>
                      </>
                    )
                  })
                }
                {
                  <div className='col-lg-4 p-3'>
                    <img src={`${allImagesUrl.itemImage}${pic}`} style={{ height: "350px", borderRadius: "10px" }} alt="" />
                  </div>
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
            <div className="row mt-3">
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />

                  {designation !== '' || bio !== '' ?
                    <>
                      <h1 className='mt-2'>Information about me</h1>
                    </>
                    : null
                  }

                  {
                    designation !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Designation:</h3>
                        <p className='mt-3'>{designation}</p>
                      </>
                      :
                      null
                  }

                  {/* {
                    bio !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Bio:</h3>
                        <p className='mt-3'>{bio}</p>
                      </> :
                      null
                  } */}

                  {
                    profDes !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Description:</h3>
                        <p className='mt-3'>{profDes}</p>
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
                    phone !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-phone" /></h2>
                          <p className='mt-3 ms-auto'>{phone}</p>
                        </div>
                      </> : null
                  }

                  {
                    cnic !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-card" /></h2>
                          <p className='mt-2 ms-auto'>{cnic}</p>
                        </div>
                      </> : null
                  }

                  {
                    address !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-book" /></h2>
                          <p className='mt-3 ms-auto ' style={{ textAlign: 'right' }}>{address}</p>
                        </div>
                      </> : null
                  }


                  {
                    region !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2><i className="fa-solid fa-location-dot" style={{ color: "#7453fc" }} /> <span style={{ fontSize: '13px' }}></span></h2>
                          <p className='mt-2 ms-auto' style={{ textAlign: 'right' }} >{region}</p>
                        </div>
                      </> : null
                  }
                </div>
                {
                  cv ?
                    <button onClick={saveFile} className='buttonx w-25 p-3' >View CV</button> : null
                }
              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'Social') {
      return (
        <>
          <div style={{ marginTop: '50px' }}>
            <div className="row">

              <div className="col-lg-6 mx-auto mt-4">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'>My Professional Accounts</h1>

                  {
                    whatsappBusiness !== '' ?
                      <>
                        <a href={`${whatsappBusiness}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-whatsapp" /></p>
                            <p className='text-white ms-auto mt-1'>My Business Whatsapp</p>
                          </div>
                        </a>
                      </> : null
                  }

                  {
                    linkedin !== '' ?
                      <>
                        <a href={`${linkedin}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-linkedin" /></p>
                            <p className='text-white ms-auto mt-1'>My LinkedIn Account</p>
                          </div>
                        </a>
                      </> : null
                  }

                  {
                    github !== '' ?
                      <>
                        <a href={`${github}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-github" /></p>
                            <p className='text-white ms-auto mt-1'>My Github Account</p>
                          </div>
                        </a>
                      </> : null
                  }

                  {
                    stackoverflow !== '' ?
                      <>
                        <a href={`${stackoverflow}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-stack-overflow" /></p>
                            <p className='text-white ms-auto mt-1'>My StackOverflow Account</p>
                          </div>
                        </a>
                      </> : null
                  }

                  {
                    upwork !== '' ?
                      <>
                        <a href={`${upwork}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard' style={{ height: "63px" }}>
                            <p style={{ color: "#7453fc" }}><img src="./source/assets/images/upwork.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                            <p className='text-white ms-auto mt-1'>My Upwork Account</p>
                          </div>
                        </a>
                      </> : null
                  }

                  {fiver !== '' ?
                    <>
                      <a href={`${fiver}`} target="_blank">
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
          </div>
        </>
      )
    }
    else {
      return null;
    }
  }

  const saveFile = () => {
    saveAs(`${Imagesurl}${cv}`);
  };

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

  {/* <div className='col-lg-4' >
              <img src={`${allImagesUrl.itemImage}${pic}`} className='profileImage' alt="profile image" />
            </div>
            <div className="col-lg-6 profileHeading">
              <h1 className='mt-2'>{name}</h1>
              <p style={{ fontSize: '12px' }}>{phone}</p>
              <h2 className='mt-3'>{profession}</h2>
              <h4 className='mt-3' style={{ color: "#7453fc" }}>Bio</h4>
              <p>{bio}</p>
              <button className='buttonx w-25 mt-4 p-3' >View CV</button>
            </div> */}

  return (
    <div>

      <div className="CoverImage" style={{ backgroundImage: cover !== "" ? `url(${Imagesurl}${cover})` : "url(./source/assets/images/heading-bg.jpg)" }} />

        <div className="container">
          <div className='col-lg-1 ms-auto mt-5 buttonProfile'>
            <button onClick={() => setProfile("userProfile")} className={profile === 'userProfile' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></button>
            <button onClick={() => setProfile("Portfolio")} className={profile === 'Portfolio' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></button>
            <button onClick={() => setProfile("About")} className={profile === 'About' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></button>
            <button onClick={() => setProfile("Social")} className={profile === 'Social' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></button>
          </div>
          </div>

      <div className="darkbg" style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)" }}>
          <div className="row">
            <div className='d-flex'>
              <div>
                <img src={`${allImagesUrl.itemImage}${pic}`} className='profileImage' alt="profile image"  />
              </div>
              <div className='ms-4'>
                <p className='mt-3 fs-2' style={{letterSpacing:'5px'}}>{name}</p>
                <p className='fs-4 mt-1' style={{color:'gray', letterSpacing:'5px'}}><b>{profession}</b></p>
              </div>
            </div>
            <div className='card border-line'>
            <div className='bio-container mx-auto mt-3'>
            <p style={{color:'#7453fc'}} className='bio-heading'>Bio</p>
            <div className='bio-box '>
              <p style={{letterSpacing:'2px'}}>{bio}</p>
            </div>
            </div>
          </div>

          {
            loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        {/* <div className="loader">Loading...</div> */}
                        <div className="spinner-border spinner" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>

                <ReturnData />
              </>
          }

</div>
      </div>
    </div >
  )
}

export default UserProfile