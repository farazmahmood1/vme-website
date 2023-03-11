import React, { useEffect, useState } from 'react'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Discover = () => {

  const [userData, setUserData] = useState([])
  const [visible, setVisible] = useState(false)
  const [loader, setLoader] = useState(false)

  const renderData = () => {
    setLoader(true)
    axios.get(`${Baseurl}fetch_all_webdata`)
      .then(res => {
        setUserData(res.data.data)
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1800) {
      setVisible(true)
    }
    else if (scrolled <= 1800) {
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    renderData()
  }, [])


  return (
    <div>
      <div className="discover-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <div className='d-flex'>

                  <h2>Our Top <em>Buyers</em></h2>

                </div>
              </div>
            </div>
            {loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        <div className="spinner-border" style={{ width: '5rem', height: '5rem', marginTop: '25em', color: '#7453fc' }} role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>

                <button className='buttonx scroolToTop' style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
                  <i className="fa-solid fa-chevron-up imgx" />
                </button>
                {
                  userData.map((items) => {
                    return (
                      <>
                        <div className="col-lg-3">
                          <div className="item">
                            <div className="row">
                              <div className="col-lg-12">
                                <span className="author">
                                </span>
                                <img src={`${Imagesurl}${items.profile_photo}`} alt='userphoto' style={{ borderRadius: 20, height: '228px' }} />
                                <h4>{items.name}</h4>
                              </div>
                              <div className="col-lg-12">
                                <div className="line-dec" />
                                <div className="row">
                                  <div className="col-6">
                                    <span>Profession: <br /> <strong>{items.profession}</strong></span>
                                  </div>
                                  <div className="col-6">
                                    <span>From: <br /> <strong>{items.region}</strong></span>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="main-button">
                                  <Link to={`/?${items.user_id}`} >View</Link>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover