import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Baseurl from "../SourceFiles/url";
import { useEffect } from "react";
import allImagesUrl from "../SourceFiles/baseimageurl";

const Categories = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = () => {
    setLoader(true);
    axios
      .get(`${Baseurl}getallitems`)
      .then((res) => {
        setData(res.data.items);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var settings = {
    dots: false,
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="categories-collections">
        <div className="container">
          <div className="row">
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
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src="./source/assets/images/icon-01.png" alt />
                      </div>
                      <h4>Tattoos</h4>
                      <div className="icon-button">
                        <Link to="/ShopMain?Tattos">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
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
                  </div>

                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="ribbon ribbon-top-right">
                        <span>soon!</span>
                      </div>
                      <div className="icon">
                        <img src="./source/assets/images/icon-05.png" alt />
                      </div>
                      <h4>Jewelerry</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="ribbon ribbon-top-right">
                        <span>soon!</span>
                      </div>
                      <div className="icon">
                        <img src="./source/assets/images/icon-03.png" alt />
                      </div>
                      <h4>Key Chains</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="collections">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <div className="line-dec" />
                      <h2>
                        Our Hot <em>Collections</em> In Market.
                      </h2>
                    </div>
                  </div>

                  {loader === true ? (
                    <>
                      <div className="col-lg-12">
                        <div className="row loaderSizing">
                          <div className="d-flex justify-content-center">
                            <div className="position-absolute top-50 start-50 translate-middle">
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
                  ) : (
                    <>
                      <Slider {...settings}>
                        {data
                          .filter((item) => item.is_hot === "true")
                          .map((items) => {
                            return (
                              <div>
                                <Link
                                  to={`/ShopScreem/${items.id}`}
                                  className="main-button"
                                >
                                  <div className="owl-collection p-2">
                                    <div className="item">
                                      <img
                                        className="shopItemImg"
                                        src={`${allImagesUrl.itemImage}${items.item_pic}`}
                                        alt
                                      />
                                      <div className="down-content">
                                        <h4>{items.item_name}</h4>
                                        <span className="collection">
                                          Price:
                                          <br />
                                          <strong>{items.item_price}</strong>
                                        </span>
                                        <span className="category">
                                          Category:
                                          <br />
                                          <strong>{items.item_type}</strong>
                                        </span>
                                        {/* <div className="d-flex justify-content-center">
                                          <a style={{ zIndex: "9999" }}>View</a>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                      </Slider>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
