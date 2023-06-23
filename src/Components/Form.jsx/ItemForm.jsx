import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link, useLocation } from 'react-router-dom'
import Baseurl from '../SourceFiles/url';
import '../Modal/SignInUser'
import SignInUser from '../Modal/SignInUser';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

toast.configure()
const ItemForm = () => {

    const location = useLocation();
    const { counter } = location.state;
    const { itemColor } = location.state;
    const { item } = location.state;

    const [openModal, setOpenModal] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false)
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [additionalDirection, setAdditionalDirection] = useState('')

    const [userName, setUserName] = useState()
    const [userLname, setUserLname] = useState()
    const [submit, setSubmit] = useState(false);
    const [openModals, setOpenModals] = useState(true)
    const [userID, setUserID] = useState()
    const [loader, setLoader] = useState(false)
    const [orderData, setOrderData] = useState([])

    useEffect(() => { topFunction(); SetLocalLogin() }, [])

    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                setUserID(parsed_user.id)
                setUserLname(parsed_user.lastname)
                setUserName(parsed_user.firstname)
            }
        } catch {
            return null;
        }
    }

    const submitData = () => {
        if (!phone || !address || !region || !city) {
            toast.warn('Please fill all fields', { theme: "dark" })
            setSubmit(true)
        }
        else {
            setLoader(true)
            var formdata = new FormData();
            formdata.append("user_id", userID);
            formdata.append("address", address);
            formdata.append("city", city);
            formdata.append("state", region);
            formdata.append("quantity", counter);
            formdata.append("contact_address", phone);
            formdata.append("product_id", item.id);
            formdata.append("colour", itemColor);
            formdata.append("additional_directions", additionalDirection);
            formdata.append("status", "new");
            formdata.append("payment_status", "unpaid");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${Baseurl}post_order`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    console.log(result)
                    if (result.status === "200") {
                        toast.success('Order Generated Successfully')
                        console.log(orderData)
                        setOrderData(result.order.id)
                        setOpenModals(true)
                    }
                    else if (result.status === "401") {
                        toast.warn('Something went wrong, Try again later')
                    }
                })
                .catch(error => {
                    console.log('error', error)
                    setLoader(false)
                    toast.danger('Error while ordering')
                });
        }
    }

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 400 ||
            document.documentElement.scrollTop > 400
        ) {
            mybutton = "block";
        } else {
            mybutton = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {/* Navbar */}
            <div>
                <header className="header-area header-sticky" >
                    <div className='container'>
                        <div className='container-fluid' style={{ borderRadius: '50px', backgroundColor: '#fff' }} >
                            <nav className="navbar  navbar-expand-lg navbar-light " style={{ borderRadius: "50px", backgroundColor: '#fff' }}>
                                <div className="container-fluid">
                                    <p >
                                        <Link to='/' className="logo">
                                            <img src="./source/assets/images/logo.png" alt='icon_image' style={{ height: "54px" }} />
                                        </Link>
                                    </p>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse " id="navbarNav">
                                        <ul className="navbar-nav  ms-auto">
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 '} aria-current="page"><b><Link to='/' className='text-secondary' >Home</Link></b></p>
                                            </li>
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 enjoy'} aria-current="page"><b> <Link state={{ values: 'Card' }} className='text-secondary' to='/ShopMain'>Shop</Link></b></p>
                                            </li>
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 '} aria-current="page"><b> <Link to='/ProfileMain' className='text-secondary' >Profiles</Link> </b></p>
                                            </li>

                                            <li className="nav-item ">
                                                <p className={'nav-link borderLogin  me-4 '} aria-current="page"><b> <p onClick={() => setOpenModal(true)} className='text-secondary' style={{ cursor: 'pointer' }}  >Login</p> </b></p>
                                            </li>

                                            <li className="nav-item ">
                                                <p className={'nav-link borderSignup me-4 '} aria-current="page"><b> <p onClick={() => setOpenSignUp(true)} style={{ cursor: 'pointer' }} className='text-white' >SIgn up for free</p> </b></p>
                                            </li>

                                            <li className="nav-item dropdown" >
                                                <a className="nav-link dropdown-toggle mt-1" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-gear" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                    <li className='d-flex updateNav'><i className="fa-solid fa-pen mt-2 ms-2" />
                                                        <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">Update Profile</a>
                                                    </li>
                                                    <li className='d-flex updateNav'>
                                                        <i className="fa-solid fa-newspaper mt-2 ms-2" />
                                                        <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">What`s New</a>
                                                    </li>
                                                    <li className='d-flex updateNav'>
                                                        <i className="fa-solid fa-question mt-2 ms-2" />
                                                        <Link className="dropdown-item updateNav" to='/WorkingVideo'>Need Help</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                {openModal && < SignIn setOpenModal={setOpenModal} />}
                {openSignUp && <SignUp setOpenSignUp={setOpenSignUp} />}

            </div>

            <Modal open={openModals} >
                <div className='card-body'>
                    <button onClick={() => setOpenModals(false)} className='btn btn-sm btn-danger float-end'>X</button>
                    <div className="d-flex justify-content-center">
                        <div className="p-4">
                            <div className="first d-flex justify-content-between align-items-center mb-3">
                                <div className="info-order">
                                    <span className="d-block name">Thank you, {userName}&nbsp;{userLname}</span>
                                    <span className="order">Order ID - {orderData}</span>
                                </div>
                                <img src="https://i.imgur.com/NiAVkEw.png" style={{ width: '40px' }} />
                            </div>
                            <div className="detail">
                                <span className="d-block summery">Your exquisite order is being crafted and promptly delivered</span>
                            </div>

                            <hr style={{ width: "220px", height: "3px", color: "#7453fc", borderRadius: "10px" }} />
                            <div className="text">
                                <span className="d-block new text-white mb-1">Shipping Address:</span>
                            </div>
                            <span className="d-block address mb-3">{address}, {city}</span>
                            <div className="  money d-flex flex-row mt-2 align-items-center">
                                <div>
                                    <img src="https://i.imgur.com/ppwgjMU.png" style={{ width: '30px' }} />

                                    &nbsp;&nbsp; <span className="ml-2 text-white">Cash on Delivery</span>
                                </div>
                                <Link to='/MyOrders' className='btn btn-sm btn-outline-secondary p-2 ms-auto rounded-pill'>My Orders</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className=''> <Link state={{ values: 'Card' }} to='/ShopMain'>Shop</Link>  &gt; <a style={{ cursor: 'default' }}>Buy Item</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-details-page">
                <div className="container">
                    <div className="row">

                        <a target={'_blank'} href="https://api.whatsapp.com/send?phone=00923034450790&text=Hello%20I%20would%20like%20more%20information" className='contactWhatsapp card-body col-lg-2' >
                            <div className='d-flex '>
                                <a className='text-white mt-1 me-2'  >Buy through Whatsapp</a>
                                <img src="./source/assets/images/whatsapp-color-icon.png" alt="whatsapp icon" style={{ height: "40px", width: "40px" }} />
                            </div>
                        </a>

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2>Apply For <em>Your Item</em> Here.</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div id="contact" >
                                <div className="row">
                                    <p style={{ zIndex: '0' }}>Hello <span style={{ fontSize: '20px', color: "#7453fc" }}>{userName}&nbsp;{userLname}</span> , Thank you for trusting VME, Please verify the mailing address</p>
                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc", borderRadius: "10px" }} />
                                    <h3 className='mb-2' style={{ color: "#7453fc" }}></h3>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Phone Number*</label>
                                            <input onChange={(e) => setPhone(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: phone === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your current phone no." autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Address</label>
                                            <textarea className="form-control text-white" onChange={(e) => setAddress(e.target.value)} style={{ borderRadius: "16px", backgroundColor: '#282b2f', borderColor: address === '' && submit === true ? 'red' : '#404245', borderRadius: "20px" }} id="exampleFormControlTextarea1" rows={7} placeholder="Enter your shipping address ..." defaultValue={""} />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Additional Directions</label>
                                            <textarea className="form-control text-white" onChange={(e) => setAdditionalDirection(e.target.value)} style={{ borderRadius: "16px", backgroundColor: '#282b2f', borderColor: address === '' && submit === true ? 'red' : '#404245', borderRadius: "20px" }} id="exampleFormControlTextarea1" rows={3} placeholder="Additional directions for the rider" defaultValue={""} />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Country, Region</label>
                                            <input onChange={(e) => setRegion(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: region === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your region" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">City*</label>
                                            <input onChange={(e) => setCity(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: city === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your current city" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6 mx-auto">
                                        <fieldset>
                                            {
                                                loader === true ?
                                                    <button type="submit" id="form-submit" className="orange-button" >Loading <i className="fa-solid fa-spinner fa-spin-pulse" /></button>
                                                    :

                                                    <button onClick={() => { submitData() }} type="submit" id="form-submit" className="orange-button" >Submit Your Applying</button>
                                            }
                                        </fieldset>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {
                            !userID ?
                                <>
                                    <SignInUser />
                                </>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemForm