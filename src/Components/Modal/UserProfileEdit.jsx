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


const UserProfileEdit = ({ closeModal, editProfileModal }) => {

    useEffect(() => { topFunction(); SetLocalLogin() }, [])

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
    const [index, setIndex] = useState(0)
    const [userID, setUserID] = useState()
    const [name, Setname] = useState("");
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [profession, setProfession] = useState('')
    const [designation, setDesignation] = useState('')
    const [cover, setCover] = useState("");
    const [profile, setProfile] = useState("");
    const [email, setEmail] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [skype, setSkype] = useState("");
    const [pinterest, setPintreset] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState("");
    const [region, setRegion] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [stackoverflow, setStackoverflow] = useState("");
    const [fiver, setFiver] = useState("");
    const [upwork, setUpwork] = useState("");
    const [cv, setCv] = useState("");
    const [proffesionalDesc, setProfessionalDesc] = useState('')

    const submitData = () => {
        var formdata = new FormData();
        formdata.append("profile_photo", profile);
        formdata.append("cover_photo", cover);
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
        formdata.append("cv", cv);
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


    return (
        <div>
            <Modal open={editProfileModal} >
                <div className='card-body'>
                    <div className='d-flex'>
                        <div>
                            <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                        </div>
                        <button onClick={closeModal} className='btn btn-outline-danger btn-sm ms-auto'>X</button>
                    </div>


                    {
                        index === 0 ? (
                            <>
                                <h5 className='mt-3 mb-1'>Add Information to your website:</h5>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => Setname(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Full Name' defaultValue={name} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className='d-flex mb-3'>
                                    <div className="">
                                        <input type="number" onChange={(e) => setAge(e.target.value)} className="form-control text-white me-1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Your Age' defaultValue={age} id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                                    <textarea type="text" onChange={(e) => setBio(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Write short bio' defaultValue={bio} id="exampleFormControlTextarea1" rows={2} />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" onChange={(e) => setProfessionalDesc(e.target.value)} className="form-control text-white" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} placeholder='Write professional description' defaultValue={bio} id="exampleFormControlTextarea1" rows={8} />
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
                            index !== 0 ?
                                <button className="btn btn-outline-warning" onClick={() => setIndex(index - 1)} ><i className='fa-solid fa-chevron-left' /></button> : null
                        }

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