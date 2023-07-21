import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link, useLocation } from 'react-router-dom'
import Baseurl from '../SourceFiles/url';
import '../Modal/SignInUser'
import SignInUser from '../Modal/SignInUser';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import MainLogo from '../../Components/SourceFiles/images/MainLogo.png'


const UserProfileEdit = ({ closeModal, editProfileModal, userData }) => {

    useEffect(() => {
        updateComponentState(userData);
        topFunction();
        SetLocalLogin()
    }, [userData])

    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                setUserID(parsed_user.id)
            }
        } catch {
            return null;
        }
    }

    const updateComponentState = (userData) => {
        Setname(userData.name);
        setGender(userData.gender);
        setPhone(userData.phone);
        setAddress(userData.address);
        setProfession(userData.profession);
        setDesignation(userData.designation);
        setCover(userData.cover_photo);
        setProfile(userData.profile_photo);
        setEmail(userData.gmail);
        setFacebook(userData.facebook);
        setInstagram(userData.instagram);
        setTwitter(userData.twitter);
        setSnapchat(userData.snapchat);
        setTiktok(userData.tiktok);
        setSkype(userData.skype);
        setPintreset(userData.printest);
        setBio(userData.bio);
        setAge(userData.age);
        setRegion(userData.region);
        setLinkedin(userData.linkedin);
        setGithub(userData.setGithub);
        setStackoverflow(userData.stackoverflow);
        setFiver(userData.fiverr);
        setUpwork(userData.upword);
        setCv(userData.cv);
        setProfessionalDesc(userData.professional_desc);
    };

    const [index, setIndex] = useState(0)
    const [userID, setUserID] = useState()
    const [name, Setname] = useState('');
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState(userData.address);
    const [profession, setProfession] = useState(userData.profession)
    const [designation, setDesignation] = useState(userData.designation)
    const [cover, setCover] = useState(userData.cover_photo);
    const [profile, setProfile] = useState(userData.profile_photo);
    const [email, setEmail] = useState(userData.gmail);
    const [facebook, setFacebook] = useState(userData.facebook);
    const [instagram, setInstagram] = useState(userData.instagram)
    const [twitter, setTwitter] = useState(userData.twitter);
    const [snapchat, setSnapchat] = useState(userData.snapchat);
    const [tiktok, setTiktok] = useState(userData.tiktok);
    const [skype, setSkype] = useState(userData.skype);
    const [pinterest, setPintreset] = useState(userData.printest);
    const [bio, setBio] = useState(userData.bio);
    const [age, setAge] = useState(userData.age);
    const [region, setRegion] = useState(userData.region);
    const [linkedin, setLinkedin] = useState(userData.linkedin);
    const [github, setGithub] = useState(userData.setGithub);
    const [stackoverflow, setStackoverflow] = useState(userData.stackoverflow);
    const [fiver, setFiver] = useState(userData.fiverr);
    const [upwork, setUpwork] = useState(userData.upword);
    const [cv, setCv] = useState(userData.cv);
    const [proffesionalDesc, setProfessionalDesc] = useState(userData.professional_desc)

    const submitData = () => {
        var formdata = new FormData();
        {
            profile ?
                formdata.append("profile_photo", profile)
                : formdata.append("profile_photo", "");
        }
        {
            cover ?
                formdata.append("cover_photo", cover)
                : formdata.append("cover_photo", "")
        }
        formdata.append("name", name);
        formdata.append("phone", phone);
        formdata.append("gmail", email);
        formdata.append("snapchat", snapchat);
        formdata.append("instagram", instagram);
        formdata.append("linkedin", linkedin);
        formdata.append("twitter", twitter);
        formdata.append("github", github);
        formdata.append("facebook", facebook);
        formdata.append("bio", bio);
        formdata.append("short_desc", "");
        formdata.append("long_desc", "");
        {
            cv ?
                formdata.append("cv", cv) : formdata.append("cv", "");
        }
        formdata.append("whatsapp", "");
        formdata.append("whatsapp_b", "");
        formdata.append("payment_status", "unpaid");
        formdata.append("telegram", "");
        formdata.append("tiktok", tiktok);
        formdata.append("skype", skype);
        formdata.append("printest", pinterest);
        formdata.append("age", age);
        formdata.append("religion", "");
        formdata.append("region", region);
        formdata.append("cnic", "");
        formdata.append("stackoverflow", stackoverflow);
        formdata.append("fiverr", fiver);
        formdata.append("upword", upwork);
        formdata.append("item_id", "id");
        formdata.append("order_status", "new");
        formdata.append("ready_to_review", "0");
        formdata.append("user_id", userID);
        formdata.append("gender", gender);
        formdata.append("professional_desc", proffesionalDesc);
        formdata.append("profession", profession);
        formdata.append("designation", designation);
        formdata.append("address", address);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}adddata`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                toast.success('Data added successfully')
                setInterval(() => {
                    window.location.reload()
                }, 1500);
            })
            .catch(error => {
                console.log('error', error)
                toast.warn('Error while adding data')
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

    const hideModal = () => {
        setIndex(0);
        closeModal();
    }

    return (
        <div>
            <Modal open={editProfileModal} >
                <div className='card-body'>
                    <div className='d-flex'>
                        <div>
                            <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                        </div>
                        <button onClick={hideModal} className='btn btn-outline-danger btn-sm ms-auto'>X</button>
                    </div>


                    {
                        index === 0 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Information to your website:</h5>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => Setname(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Full Name' defaultValue={userData.name} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className='d-flex mb-3'>
                                    <div className="">
                                        <input type="number" onChange={(e) => setAge(e.target.value)} className="form-control text-white me-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Age' defaultValue={userData.age} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <input type="text" onChange={(e) => setGender(e.target.value)} className="form-control text-white ms-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Gender' defaultValue={gender} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Email adress i.e. Ali@gmail.com' defaultValue={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-2">
                                    <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Contact number' defaultValue={phone} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile " className="text-white form-label" style={{ fontSize: '14px' }}>Profile Picture</label>
                                    <input className="form-control text-white" onChange={(e) => setProfile(e.target.files[0])} style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} type="file" id="formFile" />
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 1 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Information to your website:</h5>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setAddress(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your address' defaultValue={address} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className='d-flex mb-3'>
                                    <div className="">
                                        <input type="text" onChange={(e) => setProfession(e.target.value)} className="form-control text-white me-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Profession' defaultValue={profession} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <input type="text" onChange={(e) => setDesignation(e.target.value)} className="form-control text-white ms-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Designation' defaultValue={designation} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <input type="text" onChange={(e) => setRegion(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Add your region' defaultValue={region} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="formFile " className="text-white form-label" style={{ fontSize: '14px' }}>CV</label>
                                    <input className="form-control text-white" onChange={(e) => setCv(e.target.files[0])} style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} type="file" id="formFile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile " className="text-white form-label" style={{ fontSize: '14px' }}>Cover Picture</label>
                                    <input className="form-control text-white" onChange={(e) => setCover(e.target.files[0])} style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} type="file" id="formFile" />
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 2 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Information to your website:</h5>
                                <div className="mb-3">
                                    <textarea maxLength={80} type="text" onChange={(e) => setBio(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Write short bio' defaultValue={bio} id="exampleFormControlTextarea1" rows={2} />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" onChange={(e) => setProfessionalDesc(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Write professional description' defaultValue={proffesionalDesc} id="exampleFormControlTextarea1" rows={8} />
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 3 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Social Information:</h5>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setInstagram(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your instagram link' defaultValue={instagram} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className='d-flex mb-3'>
                                    <div className="">
                                        <input type="text" onChange={(e) => setSnapchat(e.target.value)} className="form-control text-white me-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Snapchat username' defaultValue={snapchat} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <input type="text" onChange={(e) => setTwitter(e.target.value)} className="form-control text-white ms-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Twitter username' defaultValue={twitter} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setFacebook(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your facebook link' defaultValue={facebook} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setPintreset(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Pinterest link' defaultValue={pinterest} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setTiktok(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Tiktok link' defaultValue={tiktok} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </>
                        ) : null
                    }


                    {
                        index === 4 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Professional Information:</h5>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setLinkedin(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your LinkedIn link' defaultValue={linkedin} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className='d-flex mb-3'>
                                    <div className="">
                                        <input type="text" onChange={(e) => setSkype(e.target.value)} className="form-control text-white me-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Skype username' defaultValue={skype} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <input type="text" onChange={(e) => setGithub(e.target.value)} className="form-control text-white ms-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Github username' defaultValue={github} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setStackoverflow(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your stackoverflow link' defaultValue={stackoverflow} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setFiver(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Fiver link' defaultValue={fiver} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setUpwork(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Upwork link' defaultValue={upwork} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </>
                        ) : null
                    }



                    <div className='d-flex'>

                        {
                            index !== 4 ?
                                <button className="btn btn-outline-warning ms-2" onClick={() => setIndex(index + 1)} ><i className='fa-solid fa-chevron-right' /></button>
                                : null
                        }
                        <div className="border-button btnAnimate ms-auto">
                            <a style={{ cursor: 'pointer' }} className='text-white' onClick={submitData}>Submit</a>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default UserProfileEdit