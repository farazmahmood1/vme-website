import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



const PageHeading = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

  useEffect(() => { topFunction() }, [])

  return (
    <div>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>DigiCard Market</h6>
              <h2>Discover Our Top Buyers</h2>
              <span className=''> <Link to='/'>Home</Link>  &gt; <a style={{ cursor: 'default' }}>Profiles</a></span>
            </div>
          </div>
        </div>
        <div className="featured-explore">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">

                <Slider className=' owl-carousel' {...settings}>
                  <div >
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/WaleedKhan.JPG" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Waleed Khan</h4>
                            <span className="author">
                              <img src="./source/assets/images/WaleedKhan.JPG" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Network Enginner<br /><a>Islamabad</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-03.jpg" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">New York</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/AffanSheikh.JPG" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Affan Sheikh</h4>
                            <span className="author">
                              <img src="./source/assets/images/AffanSheikh.JPG" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Backend Developer<br /><a >Lahore</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/saribBhai.JPG" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Sarib Arshad Khan</h4>
                            <span className="author">
                              <img src="./source/assets/images/saribBhai.JPG" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Full Stack Developer<br /><a>Lahore</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/faraz.JPG" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Faraz Mahmood</h4>
                            <span className="author">
                              <img src="./source/assets/images/current-02.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Musician<br /><a>Karachi</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/usamaBhai.JPG" alt style={{ borderRadius: 20, maxHeight: '420px', maxWidth: '420px' }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Usama </h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Java Developer<br /><a href="#">Lahore</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading