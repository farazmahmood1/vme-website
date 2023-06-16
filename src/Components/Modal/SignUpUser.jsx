import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Modal } from 'pretty-modal'
import Baseurl from '../SourceFiles/url'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import SignInUser from './SignInUser'


const SignUpUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [lastn, setLastn] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const [fieldStatus, setFieldStatus] = useState(false)
    const [openModal, setOpenModal] = useState(true)

    // const [openLogin, setOpenLogin] = useState(false)

    const SignupData = () => {
        if (!name || !lastn || !signUpEmail || !password || !confirmPassword || !username || !profilePic) {
            toast.warn('please fill all fields', { theme: "dark" })
            setFieldStatus(true)
        }
        else if (password !== confirmPassword) {
            toast.warn('password does not match', { theme: "dark" })
        }
        else {
            const userObj = {
                username: username,
                email: signUpEmail,
                password: password,
                password_confirmation: confirmPassword,
                role_id: "1",
                phone: phone,
                firstname: name,
                lastname: lastn,
                profile_pic: profilePic,
            }
            axios.post(`${Baseurl}register`, userObj)
                .then(res => {
                    console.log(res)
                    toast.info('Registered successfully', { theme: "dark" })
                    localStorage.setItem('user', JSON.stringify(res.data.customer));
                    setOpenModal(false)
                })
                .catch(err => {
                    console.log(err)
                    toast.warn('Error while registering', { theme: "dark" })
                })
        }
    }

    const openLogin = () => {
        <SignInUser />
    }

    return (
        <div>
            <Modal open={openModal}>
                <div className='card-body'>
                    <div className='d-flex'>
                        <div className=' mt-1'>
                            <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                        </div>
                        <button onClick={() => {
                            setOpenModal(false)
                        }} className='btn btn-outline-danger btn-sm ms-auto mt-1'>X</button>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Username</label>
                        <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: signUpEmail === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>
                    <div className='d-flex mb-3'>
                        <div className="">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">First Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control text-white me-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: name === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                        </div>
                        <div className="">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white ">Last Name</label>
                            <input type="text" onChange={(e) => setLastn(e.target.value)} className="form-control text-white ms-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: lastn === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                        <input type="email" onChange={(e) => setSignUpEmail(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: signUpEmail === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Phone Number</label>
                        <input type="email" onChange={(e) => setPhone(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: signUpEmail === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: confirmPassword === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Profile Pic</label>
                        <input type="email" onChange={(e) => setProfilePic(e.target.files[0])} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: signUpEmail === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                    </div>

                    <div className='d-flex  me-3'>
                        <button onClick={openLogin} id="emailHelp" className="form-text mt-3" >You can Sign in from Top</button>

                        <div className="border-button ms-auto btnAnimate">
                            <a style={{ cursor: 'pointer' }} className='text-white' onClick={SignupData}>Sign Up</a>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SignUpUser