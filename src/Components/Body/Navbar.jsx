import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp'
import MainLogo from '../../Components/SourceFiles/images/MainLogo.png'
import { toast } from 'react-toastify'

const Navbar = () => {

  const [userID, setUserID] = useState()
  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)

  useEffect(() => {
    SetLocalLogin()
  }, [])

  function deleteUserFromLocalStorage() {
    localStorage.removeItem('user');
    toast.success('Successfully logged out')
    setInterval(() => {
      window.location.reload()
    }, 1500);
  }

  const SetLocalLogin = async () => {
    try {
      let user = await localStorage.getItem('user');
      let parsed_user = JSON.parse(user)
      if (parsed_user) {
        setUserID(parsed_user.id)
      }
    } catch {
      return null;
    }
  }

  return (
    <div>
      <header className="header-area header-sticky" >
        <div className='container'>
          <div className='container-fluid' style={{ borderRadius: '50px', backgroundColor: '#fff' }} >
            <nav className="navbar  navbar-expand-lg navbar-light " style={{ borderRadius: "50px", backgroundColor: '#fff' }}>
              <div className="container-fluid">
                <p >
                  <Link to='/' className="logo">
                    <img src={MainLogo} className='p-2' alt='icon_image' style={{ height: "54px" }} />
                  </Link>
                </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav  ms-auto">
                    <li className="nav-item ">
                      <p className='nav-link me-4 enjoy' aria-current="page"><b><Link to='/' className='text-secondary' >Home</Link></b></p>
                    </li>
                    <li className="nav-item ">
                      <p className='nav-link me-4 ' aria-current="page"><b> <Link className='text-secondary' to='/Shop-now?All'>Shop</Link></b></p>
                    </li>
                    <li className="nav-item ">
                      <p className='nav-link me-4 ' aria-current="page"><b><Link to='/FAQ' className='text-secondary' >FAQ</Link></b></p>
                    </li>
                    <li className="nav-item ">
                      <p className='nav-link me-4 ' aria-current="page"><b><Link to='/Blogs' className='text-secondary' >Blogs</Link></b></p>
                    </li>
                    {
                      userID ?
                        <>
                          <li className="nav-item ">
                            <p className='nav-link borderLogin  me-4' aria-current="page"><b> <p onClick={deleteUserFromLocalStorage} className='text-secondary' style={{ cursor: 'pointer' }}  >Logout</p> </b></p>
                          </li>

                          <li className="nav-item ">
                            <p className='nav-link borderSignup me-2' aria-current="page"><b> <Link to={`/?${userID}`} style={{ cursor: 'pointer' }} className='text-white' >View my website</Link> </b></p>
                          </li>
                        </>
                        :

                        <>
                          <li className="nav-item ">
                            <p className='nav-link borderLogin  me-4' aria-current="page"><b> <p onClick={openSignUp === false ? () => setOpenModal(true) : null} className='text-secondary' style={{ cursor: 'pointer' }}  >Login</p> </b></p>
                          </li>

                          <li className="nav-item ">
                            <p className='nav-link borderSignup me-2' aria-current="page"><b> <p onClick={openModal === false ? () => setOpenSignUp(true) : null} style={{ cursor: 'pointer' }} className='text-white' >Sign up for free</p> </b></p>
                          </li>
                        </>
                    }

                    <li className="nav-item dropdown" >
                      <a className="nav-link fa-solid fa-gear mt-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* <i className="fa-solid fa-gear" /> */}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li className='d-flex updateNav'>
                          <i className="fa-solid fa-question mt-2 ms-2" />
                          <Link className="dropdown-item updateNav" to='/WorkingVideo'>Need Help</Link>
                        </li>
                        <li className='d-flex updateNav'>
                          <i className="fa-solid fa-trash mt-2 ms-2" />
                          <Link className="dropdown-item updateNav" to='/WorkingVideo'>Delete my website</Link>
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