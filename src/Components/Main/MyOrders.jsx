import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Baseurl from '../SourceFiles/url';
import { toast } from 'react-toastify';
import allImagesUrl from '../SourceFiles/baseimageurl';

const MyOrders = () => {

    const [currentDate, setCurrentDate] = useState('');
    // userID
    const [userID, setUserID] = useState()
    const [userName, setUserName] = useState()
    const [userLname, setUserLname] = useState()
    // user orders
    const [userOrders, setOrders] = useState([])
    const [orderAdress, setOrderAdress] = useState([])
    const [orderContact, setOrderContact] = useState([])

    useEffect(() => {
        SetLocalLogin();
        getOrders();
    }, [])

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

    const getOrders = () => {
        var formdata = new FormData();
        formdata.append("user_id", "78");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}fetch_orders_userid`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setOrders(result.Data)
                setOrderAdress(result.Data[0].address)
                setOrderContact(result.Data[0].contact_address)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    // for printing
    const Print = () => {
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    //   for date
    useEffect(() => {
        const fetchCurrentDate = () => {
            const date = new Date().toLocaleDateString();
            setCurrentDate(date);
        };
        fetchCurrentDate();
    }, []);

    return (
        <div>
            {/* Navbar */}

            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6 className="">DigiCard Market</h6>
                            <h2>My Orders</h2>
                            <span className="">
                                <Link to="/">Home</Link> &gt;{" "}
                                <a style={{ cursor: "default" }}>Shop</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="currently-market">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2>
                                    <em>My Orders</em> from the world of VME
                                </h2>
                            </div>
                        </div>
                    </div>


                    {
                        !userOrders ?
                            <>
                                <div className="row">
                                    <div className="col-lg-8">
                                        {/* Details */}
                                        <div className="cardx mb-4" style={{ backgroundColor: '#282b2f' }}>
                                            <div className="card-body">
                                                <div className="mb-3 d-flex justify-content-between">
                                                    <div className='text-white'>
                                                        <span className="me-3">{currentDate}</span>
                                                        <span className="me-3">#16123222</span>
                                                        <span className="me-3">Cash on Delivery</span>
                                                        <span className="badge rounded-pill bg-secondary">SHIPPING</span>
                                                    </div>
                                                    <div className="d-flex ">
                                                        <button className="btn text-white btn-link p-0 me-3 d-none d-lg-block btn-icon-text"><i className="fa-solid fa-download" /> <span className="text">Invoice</span></button>
                                                        <div className="dropdown">
                                                            <button className="btn btn-link p-0 text-muted" type="button" data-bs-toggle="dropdown">
                                                                <i className="fa-solid fa-print" />
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil" /> Edit</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-print" /> Print</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="table table-borderless">

                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        {/* <img src={`${allImagesUrl}${items.image_1}`} alt style={{ width: '30px' }} className="img-fluid" /> */}
                                                                    </div>
                                                                    <div className="flex-lg-grow-1 ms-3">
                                                                        {/* <h6 className="small mb-0"><a href="#" className="text-reset">{items.name}</a></h6> */}
                                                                        {/* <span className="small text-white">Color: {items.colour}</span> */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            {/* <td className='text-white' >{items.quantity}</td> */}
                                                            <td className="text-end text-white">$79.99</td>
                                                        </tr>
                                                    </tbody>

                                                    <tfoot className='text-white'>
                                                        <tr>
                                                            <td colSpan={2}>Subtotal</td>
                                                            <td className="text-end">$159,98</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}>Shipping</td>
                                                            <td className="text-end">$20.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}>Discount (Code: NEWYEAR)</td>
                                                            <td className="text-danger text-end">-$10.00</td>
                                                        </tr>
                                                        <tr className="fw-bold">
                                                            <td colSpan={2}>TOTAL</td>
                                                            <td className="text-end">$169,98</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        {/* Payment */}
                                        <div className="cardx mb-4 text-white" style={{ backgroundColor: '#282b2f' }}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h3 className="h6">Payment Method</h3>
                                                        <p>Cash on delivery <br />
                                                            Total: $169,98 <span className="badge bg-success rounded-pill">PAID</span></p>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h3 className="h6">Contact Info</h3>
                                                        <address>
                                                            <strong>{userName}&nbsp;{userLname}</strong>
                                                            <p>{orderAdress}</p>
                                                            <p>{orderContact}</p>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        {/* Customer Notes */}
                                        <div className="cardx mb-4" style={{ backgroundColor: '#282b2f' }}>
                                            <div className="card-body">
                                                <h3 className="h6">Customer Notes</h3>
                                                <p className='mt-3' style={{ lineHeight: '19px' }}>Your package is estimated to arrive within 3-5 business days. Thank you for choosing our services!</p>
                                            </div>
                                        </div>
                                        <div className="cardx mb-4 text-white" style={{ backgroundColor: '#282b2f' }}>
                                            {/* Shipping information */}
                                            <div className="card-body">
                                                <h3 className="h6">Shipping Information</h3>
                                                <strong>TCS</strong>&nbsp;
                                                <span><a href="#" className="text-decoration-underline">H4F8G2L9K6</a> <i className="bi bi-box-arrow-up-right" /> </span>
                                                <hr />
                                                <h3 className="h6">Order Date</h3>
                                                <address>
                                                    {/* <strong>{index + 1}.&nbsp; {items.updated_at}</strong> */}
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            userOrders.map((items, index) => {
                                return (
                                    <>
                                        <div className="row" id='printablediv'>
                                            <div className="col-lg-8">
                                                {/* Details */}
                                                <div className="cardx mb-4" style={{ backgroundColor: '#282b2f' }}>
                                                    <div className="card-body" >
                                                        <div className="mb-3 d-flex justify-content-between">
                                                            <div className='text-white'>
                                                                <span className="me-3">{currentDate}</span>
                                                                <span className="me-3">#16123222</span>
                                                                <span className="me-3">Cash on Delivery</span>
                                                                <span className="badge rounded-pill bg-secondary">SHIPPING</span>
                                                            </div>
                                                            <div className="d-flex ">
                                                                <button className="btn text-white btn-link p-0 me-3 d-none d-lg-block btn-icon-text" onClick={Print}><i className="fa-solid fa-print" /> <span className="text">Invoice</span></button>

                                                            </div>
                                                        </div>
                                                        <table className="table table-borderless">

                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex mb-2">
                                                                            <div className="flex-shrink-0">
                                                                                <img src={`${allImagesUrl}${items.image_1}`} alt style={{ width: '30px' }} className="img-fluid" />
                                                                            </div>
                                                                            <div className="flex-lg-grow-1 ms-3">
                                                                                <h6 className="small mb-0"><a href="#" className="text-reset">{items.name}</a></h6>
                                                                                <span className="small text-white">Color: {items.colour}</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className='text-white' >{items.quantity}</td>
                                                                    <td className="text-end text-white">$79.99</td>
                                                                </tr>
                                                            </tbody>

                                                            <tfoot className='text-white'>
                                                                <tr>
                                                                    <td colSpan={2}>Subtotal</td>
                                                                    <td className="text-end">$159,98</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>Shipping</td>
                                                                    <td className="text-end">$20.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>Discount (Code: NEWYEAR)</td>
                                                                    <td className="text-danger text-end">-$10.00</td>
                                                                </tr>
                                                                <tr className="fw-bold">
                                                                    <td colSpan={2}>TOTAL</td>
                                                                    <td className="text-end">$169,98</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                                {/* Payment */}
                                                <div className="cardx mb-4 text-white" style={{ backgroundColor: '#282b2f' }}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <h3 className="h6">Payment Method</h3>
                                                                <p>Cash on delivery <br />
                                                                    Total: $169,98 <span className="badge bg-success rounded-pill">PAID</span></p>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <h3 className="h6">Contact Info</h3>
                                                                <address>
                                                                    <strong>{userName}&nbsp;{userLname}</strong>
                                                                    <p>{orderAdress}</p>
                                                                    <p>{orderContact}</p>
                                                                </address>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                {/* Customer Notes */}
                                                <div className="cardx mb-4" style={{ backgroundColor: '#282b2f' }}>
                                                    <div className="card-body">
                                                        <h3 className="h6">Customer Notes</h3>
                                                        <p className='mt-3' style={{ lineHeight: '19px' }}>Your package is estimated to arrive within 3-5 business days. Thank you for choosing our services!</p>
                                                    </div>
                                                </div>
                                                <div className="cardx mb-4 text-white" style={{ backgroundColor: '#282b2f' }}>
                                                    {/* Shipping information */}
                                                    <div className="card-body">
                                                        <h3 className="h6">Shipping Information</h3>
                                                        <strong>TCS</strong>&nbsp;
                                                        <span><a href="#" className="text-decoration-underline">H4F8G2L9K6</a> <i className="bi bi-box-arrow-up-right" /> </span>
                                                        <hr />
                                                        <h3 className="h6">Order Date</h3>
                                                        <address>
                                                            <strong>{index + 1}.&nbsp; {items.updated_at}</strong>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                    }




                </div>
            </div>
        </div>
    )
}

export default MyOrders