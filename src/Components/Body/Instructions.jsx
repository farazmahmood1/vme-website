import React from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
  return (
    <div>
      <div className="create-nft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>Buy the product &amp; Put It On The Market.</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <Link to='/ShopMain?Card'>Explore Shop</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item first-item">
                <div className="number">
                  <h6>1</h6>
                </div>
                <div className="icon">
                  <img src="./source/assets/images/icon-02.png" alt />
                </div>
                <h4>Buy The Product</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in eligendi dolorem illum, necessitatibus odit. Maxime.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item second-item">
                <div className="number">
                  <h6>2</h6>
                </div>
                <div className="icon">
                  <img src="./source/assets/images/icon-04.png" alt />
                </div>
                <h4>Add Your Digital Profile</h4>
                <p>Lorem ipsum dolor sit amet consectetur sit amet <a href="https://templatemo.com/page/1" target="_blank" rel="nofollow">Beateae Elingigi</a>. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="icon">
                  <img src="./source/assets/images/icon-06.png" alt />
                </div>
                <h4>Premium Quality &amp; Handmade</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">Lorem, ipsum dolor.</a>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions