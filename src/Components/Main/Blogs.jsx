import React from 'react'
import { Link } from 'react-router-dom'
const Blogs = () => {



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

                                <div className="blog-home5">
                                    <div className="container">
                                        <div className="row mt-4">
                                            {/* Column */}
                                            <div className="col-md-4">
                                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                                    <img className="card-img" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img9.jpg" alt="Card image" />
                                                    <div className="card-img-overlay overflow-hidden">
                                                        <div className="d-flex align-items-center">
                                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Charity, Ngo</span>
                                                            <div className="ml-2">
                                                                <span className="ml-2">Feb 18, 2018</span>
                                                            </div>
                                                        </div>
                                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Column */}
                                            {/* Column */}
                                            <div className="col-md-4">
                                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                                    <img className="card-img" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img10.jpg" alt="Card image" />
                                                    <div className="card-img-overlay overflow-hidden">
                                                        <div className="d-flex align-items-center">
                                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Charity, Ngo</span>
                                                            <div className="ml-2">
                                                                <span className="ml-2">Feb 18, 2018</span>
                                                            </div>
                                                        </div>
                                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                                        <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Column */}
                                            {/* Column */}
                                            <div className="col-md-4">
                                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                                    <img className="card-img" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img11.jpg" alt="Card image" />
                                                    <div className="card-img-overlay overflow-hidden">
                                                        <div className="d-flex align-items-center">
                                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Charity, Ngo</span>
                                                            <div className="ml-2">
                                                                <span className="ml-2">Feb 18, 2018</span>
                                                            </div>
                                                        </div>
                                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Column */}
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

export default Blogs