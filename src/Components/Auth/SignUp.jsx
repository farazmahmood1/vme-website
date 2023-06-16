import axios from 'axios'
import React, { useState } from 'react'
import Baseurl from '../SourceFiles/url'
import { toast } from 'react-toastify'

const SignUp = ({ setOpenSignUp }) => {

    const [name, setName] = useState('')
    const [lastn, setLastn] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [fieldStatus, setFieldStatus] = useState(false)

    const loginFunction = () => {
        if (!name || !lastn || !email || !password || !confirmPassword || !username || !phone) {
            toast.warn('please fill all fields', { theme: "dark" })
            setFieldStatus(true)
        }
        else if (password !== confirmPassword) {
            toast.warn('password does not match', { theme: "dark" })
        }
        else {

            var formdata = new FormData();
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("password_confirmation", confirmPassword);
            formdata.append("role_id", "1");
            formdata.append("phone", phone);
            formdata.append("firstname", name);
            formdata.append("lastname", lastn);
            formdata.append("profile_pic", profilePic, "[PROXY]");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${Baseurl}register`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.data.user)
                    if (result.response === "200") {
                        toast.success('User Registered Successfully')
                        localStorage.setItem('user', JSON.stringify(result.data.user));
                    }
                    else if (result.response === "401") {
                        toast.warn('Something went wrong...')
                    }
                })
                .catch(error => {
                    console.log('error', error)
                    toast.warn('Error while registering')
                });

        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-5  ms-auto'>
                    <div className='card in-left mainModal mt-5' style={{ borderRadius: "15px", width: "350px" }}>
                        <div className='card-body'>
                            <div className='d-flex'>
                                <div className=' mt-3'>
                                    <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                                </div>
                                <button onClick={() => setOpenSignUp(false)} className='btn btn-outline-danger btn-sm ms-auto mt-2'>X</button>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Username</label>
                                <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: username === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className='d-flex mb-1'>

                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white">First Name</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control text-white me-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: name === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white ">Last Name</label>
                                    <input type="text" onChange={(e) => setLastn(e.target.value)} className="form-control text-white ms-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: lastn === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                </div>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: email === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Phone Number</label>
                                <input type="email" onChange={(e) => setPhone(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: phone === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>

                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: confirmPassword === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>

                            <div className="mb-1">
                                <label htmlFor="formFile" className="form-label text-white">Profile Pic</label>
                                <input className="form-control text-white" onChange={(e) => setProfilePic(e.target.files[0])} type="file" id="formFile" style={{ backgroundColor: 'rgb(35, 34, 45)', borderColor: 'rgb(146, 84, 243)' }} />
                            </div>


                            <div className='d-flex mt-2 me-3'>
                                {/* <a id="emailHelp" className="form-text mt-3">sdfsa</a> */}
                                <div className="border-button ms-auto btnAnimate" style={{ cursor: 'pointer' }}>
                                    <a className='text-white' onClick={loginFunction}>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp