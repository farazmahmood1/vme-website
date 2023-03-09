import React, { useRef } from 'react'
import { Modal } from 'pretty-modal';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure()
const HelpVideo = () => {

    const [shouldShow, setShouldShow] = useState(false)

    function oncloseModal() {
        setShouldShow((prev) => !prev)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_en9r2z2', 'template_mmlwrlk', form.current, 'j9CQiMuXPMuGbRF1T')
            .then((result) => {
                console.log(result.text);
                toast.info('Response Submitted')
            }, (error) => {
                console.log(error.text);
                toast.warn('Error while submitting respone')
            });
        e.target.reset()
    }

    return (
        <div>
            
            <Modal
                open={shouldShow}
            >
                <div className='card-body'>
                    <button className='btn btn-outline-danger btn-sm float-end' onClick={() => {
                        oncloseModal()
                    }}>X</button>
                    <div className="row">
                        <div className="col-lg-7">
                            <form ref={form} onSubmit={sendEmail}>
                                <h4 className='mt-4'>Get in Touch</h4>
                                <div className='d-flex'>
                                    <div className='w-100'>
                                        <label htmlFor="exampleInputEmail1" className="form-label text-white mt-2">Name</label>
                                        <input type="text" className="form-control text-white" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                    <div className="w-100">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white mt-2">Email</label>
                                        <input type="email" className="form-control text-white ms-1" name='email' id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-white mt-3">Subject</label>
                                    <input type="text" className="form-control text-white" name='subject' id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                                <div className="">
                                    <label className="form-label text-white mt-3">Message</label>
                                    <textarea type="text" className="form-control text-white" name='message' rows={4} style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                                <button type="submit" className='buttonx mt-3'>Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className='d-flex mt-3'>
                                <h4 className='mt-2'>Contact Us</h4>
                            </div>
                            <p className='mt-2' style={{ color: "#7453fc" }}>We are open for any suggestions</p>
                            <div className='d-flex mt-3 '>
                                <i class="fa-solid fa-location-dot text-white fa-2x mt-4"></i>
                                &nbsp;&nbsp;<p><strong> Address:</strong>  Office#28-29, Heaven Mall Zarrar Shaheed Road, Al-Faisal Town, Lahore Punjab Pakistan</p>
                            </div>
                            <div className='d-flex mt-3'>
                                <i class="fa-solid fa-phone  text-white fa-2x mt-1"></i>
                                &nbsp;&nbsp;<p><strong> Contact:</strong> +92 343 453 3851</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <i class="fa-solid fa-envelope text-white fa-2x mt-1"></i>
                                &nbsp;&nbsp;<p className='mt-1'><strong> Mail:</strong> contact@ussoftprovider.com</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <i class="fa-brands fa-chrome text-white fa-2x mt-1"></i>
                                &nbsp;&nbsp;<a className='text-white mt-2' target="_blank" href='https://www.alphanites.ussoftprovider.com/'><strong> Website:</strong> alphanites.ussoftprovider.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="categories-collections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="categories">
                                <div className="row d-flex justify-content-center ">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Something wrong while <em>Purshasing</em> products.</h2>
                                            <h5 className='mt-2'><em> Here's a tutorial Video for you </em></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-6 mx-auto helpVideo'>
                                            <iframe width="560" height="315" autoplay="on" src="https://www.youtube.com/embed/el3N6qQjr-I?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Something's wrong <em>Tell</em> us</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <h4>Call us</h4>
                                            <div className="icon-button">
                                                <a onClick={() => oncloseModal()} ><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope" />
                                            </div>
                                            <h4>Email</h4>
                                            <div className="icon-button">
                                                <a onClick={() => oncloseModal()}><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-comment" />
                                            </div>
                                            <h4>Whatsapp</h4>
                                            <div className="icon-button">
                                                <a onClick={() => oncloseModal()}><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-address-book" />
                                            </div>
                                            <h4>Address</h4>
                                            <div className="icon-button">
                                                <a onClick={() => oncloseModal()}><i className="fa fa-angle-right" /></a>
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

export default HelpVideo