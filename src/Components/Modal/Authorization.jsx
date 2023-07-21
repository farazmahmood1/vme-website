import React from 'react'

const Authorization = ({ setOpenModals }) => {
    return (
        <div>
            <div className="container ">
                <div className="modals">
                    <div className="row justify-content-center" >
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log" />
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-frontx">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-groupx">
                                                        <input type="email" className="form-stylex" placeholder="Email" />
                                                        <i className="input-icon uil uil-at" />
                                                    </div>
                                                    <div className="form-groupx mt-2">
                                                        <input type="password" className="form-stylex" placeholder="Password" />
                                                        <i className="input-icon uil uil-lock-alt" />
                                                    </div>
                                                    <a href="https://www.web-leb.com/code" className="btny mt-4">Login</a>
                                                    <p className="mb-0 mt-4 text-center"><a href="https://www.web-leb.com/code" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-3 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-stylex" placeholder="Full Name" />
                                                        <i className="input-icon uil uil-user" />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="tel" className="form-stylex" placeholder="Phone Number" />
                                                        <i className="input-icon uil uil-phone" />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" className="form-stylex" placeholder="Email" />
                                                        <i className="input-icon uil uil-at" />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" className="form-stylex" placeholder="Password" />
                                                        <i className="input-icon uil uil-lock-alt" />
                                                    </div>
                                                    <a className="btny mt-4">Register</a>
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

    )
}

export default Authorization