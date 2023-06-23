import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const MyOrders = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false)
    const [currentDate, setCurrentDate] = useState('');

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
                                                            <img src="https://www.bootdey.com/image/280x280/87CEFA/000000" alt style={{ width: '30px' }} className="img-fluid" />
                                                        </div>
                                                        <div className="flex-lg-grow-1 ms-3">
                                                            <h6 className="small mb-0"><a href="#" className="text-reset">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</a></h6>
                                                            <span className="small text-white">Color: Black</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-white' >1</td>
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
                                            <h3 className="h6">Billing address</h3>
                                            <address>
                                                <strong>John Doe</strong><br />
                                                1355 Market St, Suite 900<br />
                                                San Francisco, CA 94103<br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
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
                                    <p>Sed enim, faucibus litora velit vestibulum habitasse. Cras lobortis cum sem aliquet mauris rutrum. Sollicitudin. Morbi, sem tellus vestibulum porttitor.</p>
                                </div>
                            </div>
                            <div className="cardx mb-4 text-white" style={{ backgroundColor: '#282b2f' }}>
                                {/* Shipping information */}
                                <div className="card-body">
                                    <h3 className="h6">Shipping Information</h3>
                                    <strong>FedEx</strong>
                                    <span><a href="#" className="text-decoration-underline" target="_blank">FF1234567890</a> <i className="bi bi-box-arrow-up-right" /> </span>
                                    <hr />
                                    <h3 className="h6">Address</h3>
                                    <address>
                                        <strong>John Doe</strong><br />
                                        1355 Market St, Suite 900<br />
                                        San Francisco, CA 94103<br />
                                        <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders