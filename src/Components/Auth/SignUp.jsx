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
    const [fieldStatus, setFieldStatus] = useState(false)

    const loginFunction = () => {
        if (!name || !lastn || !email || !password || !confirmPassword) {
            toast.warn('please fill all fields', { theme: "dark" })
            setFieldStatus(true)
        }
        else if (password !== confirmPassword) {
            toast.warn('password does not match', { theme: "dark" })
        }
        else {
            const userObj = {
                firstname: name,
                lastname: lastn,
                email: email,
                password: password,
                password_confirmation: confirmPassword
            }
            axios.post(`${Baseurl}register`, userObj)
                .then(res => {
                    console.log(res.data.customer)
                    toast.info('Registered successfully', { theme: "dark" })

                    localStorage.setItem('user', JSON.stringify(res.data.customer));

                    setInterval(() => {
                        window.location.reload()
                    }, 1500);

                })
                .catch(err => {
                    console.log(err)
                    toast.warn('Error while registering', { theme: "dark" })
                })
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

                            <div className='d-flex mt-5 mb-3'>
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
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: email === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: password === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: confirmPassword === '' && fieldStatus === true ? 'red' : "#9254F3" }} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                            </div>

                            <div className='d-flex  me-3'>
                                <a id="emailHelp" className="form-text mt-3"></a>
                                <div className="border-button ms-auto btnAnimate">
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