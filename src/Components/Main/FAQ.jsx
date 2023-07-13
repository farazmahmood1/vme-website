import { Link } from "react-router-dom";
import Instructions from "../Homepage/Instructions";
import Categories from "../Homepage/HotCollection";
import Banner from "../Homepage/Banner";
import React, { useEffect, useState } from "react";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import MainLogo from "../../Components/SourceFiles/images/MainLogo.png";
import { toast } from "react-toastify";

const FAQ = () => {

    return (
        <div>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6 className="">DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className="">
                                <Link to="/">Home</Link> &gt;
                                <a style={{ cursor: "default" }}>Shop</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-collections" style={{ paddingTop: "0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="collections">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>
                                                Our Hot <em>Collections</em> In Market.
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item mb-3" style={{ backgroundColor: '#37393C', borderRadius: '25px' }}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button text-white p-4" style={{ backgroundColor: "#282B2F", borderRadius: '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-white">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3" style={{ backgroundColor: '#37393C', borderRadius: '25px' }}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed text-white p-4" style={{ backgroundColor: "#282B2F", borderRadius: '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-white">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3" style={{ backgroundColor: '#37393C', borderRadius: '25px' }}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed text-white p-4" style={{ backgroundColor: "#282B2F", borderRadius: '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-white">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

export default FAQ;
