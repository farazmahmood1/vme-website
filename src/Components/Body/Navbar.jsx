import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp'

const Navbar = () => {

  const [index, setIndex] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)

  return (
    <div>
      <header className="header-area header-sticky" >
        <div className='container'>
          <div className='container-fluid' style={{ borderRadius: '50px', backgroundColor: '#fff' }} >
            <nav className="navbar  navbar-expand-lg navbar-light " style={{ borderRadius: "50px", backgroundColor: '#fff' }}>
              <div className="container-fluid">
                <p onClick={() => setIndex(1)}>
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
                      <p onClick={() => setIndex(1)} className={index === 1 ? 'nav-link me-4 enjoy' : 'nav-link me-4 '} aria-current="page"><b><Link to='/' className='text-secondary' >Home</Link></b></p>
                    </li>
                    <li className="nav-item ">
                      <p onClick={() => setIndex(2)} className={index === 2 ? 'nav-link me-4 enjoy ' : 'nav-link me-4 '} aria-current="page"><b> <Link state={{ values: 'Card' }} className='text-secondary' to='/ShopMain'>Shop</Link></b></p>
                    </li>
                    <li className="nav-item ">
                      <p onClick={() => setIndex(3)} className={index === 3 ? 'nav-link me-4 enjoy ' : 'nav-link me-4 '} aria-current="page"><b> <Link to='/ProfileMain' className='text-secondary' >Profiles</Link> </b></p>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-gear" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <div className='d-flex'>
                          <i className="fa-solid fa-user text-dark mt-1 ms-2" />
                          <p onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
                            <p className=" ms-2 text-dark">Sign In</p>
                          </p>
                        </div>
                        <div className='d-flex'>
                          <i className="fa-solid fa-user text-dark mt-1 ms-2" />
                          <p onClick={() => setOpenSignUp(true)} style={{ cursor: 'pointer' }} >
                            <p className=" ms-2 text-dark">Sign up</p>
                          </p>
                        </div>
                        <hr />
                        <li className='d-flex'><i className="fa-solid fa-pen mt-2 ms-2" />
                          <a className="dropdown-item" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">Update Profile</a>
                        </li>
                        <li className='d-flex'>
                          <i className="fa-solid fa-newspaper mt-2 ms-2" />
                          <a className="dropdown-item" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">What`s New</a>
                        </li>
                        <li className='d-flex'>
                          <i className="fa-solid fa-question mt-2 ms-2" />
                          <Link className="dropdown-item" to='/WorkingVideo'>Need Help</Link>
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
  )
}

export default Navbar