import React, { useState } from 'react';
import { toast } from 'react-toastify'
import Baseurl from '../SourceFiles/url'
import axios from 'axios';

const Authorization = ({ setAuthModal, authModal }) => {

    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, sestUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [fieldStatus, setFieldStatus] = useState(false)
    const [Loading, setLoading] = useState(false)


    const loginFunction = () => {
        if (!email || !password) {
            toast.warn('please fill all fields', { theme: "dark" })
            setFieldStatus(true)
        }
        else {
            const userObj = {
                email: email,
                password: password
            }
            axios.post(`${Baseurl}login`, userObj)
                .then(res => {
                    console.log(res.data.status)
                    if (res.data.status === "200") {
                        setAuthModal(false)
                        toast.info('Logged in successfully', { theme: "dark" })
                        localStorage.setItem('user', JSON.stringify(res.data.user));

                        setInterval(() => {
                            window.location.reload()
                        }, 1500);
                    }
                    else if (res.data.status === "401") {
                        toast.info(res.data.message, { theme: "dark" })
                    }
                })
                .catch(err => {
                    console.log(err)
                    toast.warn('Error while logging in', { theme: "dark" })
                })
        }
    }

    const signUpFunction = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword || !username || !phone) {
            toast.warn('please fill all fields', { theme: "dark" })
            setFieldStatus(true)
        }
        else if (password !== confirmPassword) {
            toast.warn('password does not match', { theme: "dark" })
        }
        else {
            setLoading(true)
            var formdata = new FormData();
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("password_confirmation", confirmPassword);
            formdata.append("role_id", "1");
            formdata.append("phone", phone);
            formdata.append("firstname", firstName);
            formdata.append("lastname", lastName);


            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${Baseurl}register`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.data)
                    if (result.status === "200") {
                        setLoading(false)
                        setAuthModal(false)
                        toast.success('User Registered Successfully')
                        localStorage.setItem('user', JSON.stringify(result.user));
                        setInterval(() => {
                            window.location.reload()
                        }, 1500);
                    }
                    else if (result.status === "401") {
                        setLoading(false)
                        toast.warn(result.message)
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
            {authModal && <div className="overlay" />}
            <div className="modals" >
                <div className="row justify-content-center">
                    <div className="col-12 text-center align-self-center">
                        <div className="section pt-sm-2 text-center">
                            <h6>Welcome to VME</h6>
                            <h4 className="mb-0 pb-3">
                                <span>Log In</span>&nbsp;&nbsp;
                                <span>Sign Up</span>
                            </h4>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log" />
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-frontx">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4">Log In</h4>
                                                <div className="form-groupx">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-stylex" placeholder="Email" style={{ borderColor: email === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-user text-white" />
                                                </div>
                                                <div className="form-groupx mt-2">
                                                    <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-stylex" placeholder="Password" style={{ borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-lock text-white" />
                                                </div>
                                                <div className='d-flex mt-3'>
                                                    <p className="form-text mt-3 me-2" style={{ cursor: 'grab' }}>Welcome Back To our site</p>
                                                    &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate" style={{ cursor: 'pointer' }}>
                                                        <a onClick={loginFunction} className='text-white ms-1'>Login</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-3 pb-3">Sign Up</h4>
                                                <div className="form-groupx ">
                                                    <input onChange={(e) => sestUsername(e.target.value)} type="email" className="form-stylex" placeholder="Username" style={{ borderColor: username === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-user text-white" />
                                                </div>
                                                <div className='d-flex'>
                                                    <div className="mb-1 mt-1">
                                                        <input onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' type="text" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: firstName === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    </div>
                                                    <div className="mb-1 mt-1">
                                                        <input onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' type="text" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: lastName === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    </div>
                                                </div>
                                                <div className="form-groupx mb-1">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-stylex" placeholder="Email" style={{ borderColor: email === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-envelope text-white" />
                                                </div>
                                                <div className="form-groupx mb-1">
                                                    <input onChange={(e) => setPhone(e.target.value)} type="phone" className="form-stylex" placeholder="Phone" style={{ borderColor: phone === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-phone text-white" />
                                                </div>
                                                <div className="form-groupx mb-1">
                                                    <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-stylex" placeholder="Password" style={{ borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-lock text-white" />
                                                </div>
                                                <div className="form-groupx mb-1">
                                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-stylex" placeholder="Confirm Password" style={{ borderColor: confirmPassword === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                                                    <i className="input-icon fa-solid fa-lock text-white" />
                                                </div>
                                                <div className='d-flex mt-3'>
                                                    <p className="form-text mt-3 me-2" style={{ cursor: 'grab' }}></p>
                                                    &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate" style={{ cursor: 'pointer' }}>
                                                        <a onClick={signUpFunction} className='text-white ms-1'>Register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
