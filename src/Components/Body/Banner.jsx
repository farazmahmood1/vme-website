import React from 'react'
import { Link } from 'react-router-dom'
import crouselImg from '../SourceFiles/images/1.png'
import crouselImg2 from '../SourceFiles/images/2.png'

const Banner = () => {
  return (
    <div>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Liberty DigiCard Market</h6>
                <h2>Create, Sell &amp; Collect Top NFT`s.</h2>
                <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                <div className="buttons">
                  <div className="border-button">
                    <Link to='/ShopMain?Card' >Explore Shop</Link>
                  </div>
                  <div className="main-button">
                    <Link to='/WorkingVideo' >How to buy</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 imageBanner">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={crouselImg} className="d-block w-100" alt="..."  />
                  </div>
                  <div className="carousel-item">
                    <img src={crouselImg2} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner