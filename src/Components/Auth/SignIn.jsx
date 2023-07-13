import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Baseurl from '../SourceFiles/url'

const SignIn = ({ setOpenModal }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fieldStatus, setFieldStatus] = useState(false)

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

    return (
        <div className='row'>
            <div className='col-lg-4  ms-auto'>
                <div className='card in-left  mainModal mt-5' style={{ borderRadius: "15px" }}>
                    <div className='card-body'>
                        <div className='d-flex'>
                            <div className=' mt-3'>
                                <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                            </div>
                            <button onClick={() => setOpenModal(false)} className='btn btn-outline-danger btn-sm ms-auto mt-2'>X</button>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: email === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                            <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                        </div>
                        <div className='d-flex '>
                            <p className="form-text mt-3 me-2" style={{ cursor: 'grab' }}>Welcome Back To our site</p>
                            &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate" style={{ cursor: 'pointer' }}>
                                <a onClick={loginFunction} className='text-white ms-1'>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn