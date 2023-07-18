import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Baseurl from '../SourceFiles/url';
import Imagesurl from '../SourceFiles/Imageurl';

const Blogs = () => {
    const [userData, setUserData] = useState([]);
    const [loader, setLoader] = useState(false);

    const recieveData = () => {
        setLoader(true);
        axios
            .get(`${Baseurl}fetchNews`)
            .then((res) => {
                setLoader(false);
                setUserData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        recieveData();
    }, []);


    return (
        <div>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6 className="">DigiCard Market</h6>
                            <h2>Our blogs</h2>
                            <span className="">
                                <Link to="/">Home</Link> &gt;
                                <a style={{ cursor: "default" }}>Blogs</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-collections" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="collections">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>
                                                What's <em>Trending</em> In Market.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-home5">
                                    <div className="row mb-5">
                                        {
                                            loader === true ?
                                                (
                                                    <>
                                                        <div className="row ">
                                                            <div className="col-lg-12">
                                                                <div className="d-flex justify-content-center">
                                                                    <div className="">
                                                                        <div
                                                                            className="spinner-border"
                                                                            style={{
                                                                                width: "5rem",
                                                                                height: "5rem",
                                                                                marginTop: "10em",
                                                                                marginBottom: '10em',
                                                                                color: "#7453fc",
                                                                            }}
                                                                            role="status"
                                                                        >
                                                                            <span className="visually-hidden">
                                                                                Loading...
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) :

                                                userData.map((items) => {
                                                    return (
                                                        <>
                                                            <>

                                                                {/* Column */}
                                                                <div className="col-md-4">
                                                                    <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                                                        {/* src={`${Imagesurl}${items.item_image}`} */}
                                                                        <img className="card-img img-fluid" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img11.jpg" alt="Card image" />
                                                                        <div className="card-img-overlay overflow-hidden">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Lahore, Pakistan</span>
                                                                                <div className="ml-2">
                                                                                    <span className="ml-2">{items.Idate}</span>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="card-title my-3 font-weight-normal">{items.title}</h5>
                                                                            <p className="card-text text-dark mt-0 pt-0" style={{ fontSize: '12px', lineHeight: '17px' }}>{items.body}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <div className="col-md-4">
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
                                            </div> */}

                                                            </>
                                                        </>
                                                    )
                                                })
                                        }


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