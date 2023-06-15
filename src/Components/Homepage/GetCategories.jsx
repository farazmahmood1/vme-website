import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Baseurl from "../SourceFiles/url";
import { useEffect } from "react";

const GetCategories = () => {
  const [categories, setCategories] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])


  const fetchCategories = () => {
    setLoader(true)
    axios.get(`${Baseurl}fetchAllcategory`)
      .then((res) => {
        setLoader(false)
        setCategories(res.data.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="col-lg-12">
        <div className="categories">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>
                  Browse Through Our <em>Categories</em> Here.
                </h2>
              </div>
            </div>

            {

              loader === true ?
                (
                  <>
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-center">
                          <div className="" style={{ marginTop: "-300px" }}>
                            <div
                              className="spinner-border"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                marginTop: "25em",
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
                )
                :
                <>(
                  <Slider {...settings}>
                    {
                      categories.map((items) => {
                        return (
                          <div className="col-lg-2 col-sm-6 p-2">
                            <div className="item">
                              <div className="icon">
                                <img src="./source/assets/images/icon-02.png" className="mt-3 ms-3" alt />
                              </div>
                              <h4>{items.category_name}</h4>
                              <div className="icon-button">
                                <Link to={`/ShopMain?${items.category_name}`}>
                                  <i className="fa fa-angle-right" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>)
                </>
            }


            {/* <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src="./source/assets/images/icon-02.png" alt />
                      </div>
                      <h4>Digi Cards</h4>
                      <div className="icon-button">
                        <Link to="/ShopMain?Card">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </div>
                    </div>
                  </div> */}


            {/* <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="ribbon ribbon-top-right">
                        <span>soon!</span>
                      </div>
                      <div className="icon">
                        <img src="./source/assets/images/icon-03.png" alt />
                      </div>
                      <h4>Key Chains</h4>
                    </div>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetCategories