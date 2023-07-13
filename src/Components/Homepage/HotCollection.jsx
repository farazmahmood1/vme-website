import React,{ useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import Baseurl from "../SourceFiles/url";
import allImagesUrl from "../SourceFiles/baseimageurl";
import GetCategories from "./GetCategories";

const HotCollection = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = () => {
    setLoader(true);
    axios.post(`${Baseurl}getallproducts`)
      .then((res) => {
        setData(res.data.Data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PrevArrow = (props) => (
    <button {...props} className="slider-arrow slider-prev">
      <i className="fa-solid fa-chevron-left" />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="slider-arrow slider-next">
      <i className="fa-solid fa-chevron-right" />
    </button>
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2100,
    cssEase: "ease",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

            <GetCategories />

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
                                  to={`/Buy-now/${items.id}`}
                                  className="main-button"
                                >
                                  <div className="owl-collection p-2">
                                    <div className="item">
                                      <img
                                        className="shopItemImg"
                                        src={`${allImagesUrl}${items.image_1}`}
                                        alt
                                      />
                                      <div className="down-content">
                                        <h4>{items.name}</h4>
                                        <span className="collection">
                                          Price:
                                          <br />
                                          <strong>{items.actual_price}</strong>
                                        </span>
                                        <span className="category">
                                          Category:
                                          <br />
                                          <strong>{items.category_name}</strong>
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

export default HotCollection;
