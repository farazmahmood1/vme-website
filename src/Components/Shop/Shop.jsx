import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Baseurl from "../SourceFiles/url";
import Imagesurl from "../SourceFiles/Imageurl";
import ShopScreem from "../Main/ShopScreem";
import { useLocation } from "react-router-dom";
import coverUrl from "../SourceFiles/coverUrl";
import allImagesUrl from "../SourceFiles/baseimageurl";

const Shop = () => {

  const [categories, setCategories] = useState([])
  const [card, setCard] = useState([]);
  const [type, setType] = useState("tatto");
  const [loader, setLoader] = useState(false);

  const getLink = () => {
    const url = `${window.location.href}`;
    const part = url.split("?");
    const path = part[1];
    setType(path);
  };


  useEffect(() => {
    fetchCategories()
    getLink();
    dataRender();
    topFunction();
  }, []);

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

  const dataRender = () => {
    setLoader(true);
    axios
      .post(`${Baseurl}getallproducts`)
      .then((res) => {
        setLoader(false);
        setCard(res.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
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


  return (
    <div>
      <div className="page-heading normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h6 className="">DigiCard Market</h6>
              <h2>Buy Your DigiCard Now.</h2>
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
                  <em>Items</em> Currently In The Market.
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
                            marginTop: "15em",
                            color: "#7453fc",
                          }}
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-6">




                  <div className="filters">
                    <ul>
                      {
                        categories.map((items) => {
                          return (
                            <>
                              <Link to={`/ShopMain?${items.category_name}`}>
                                <li
                                  onClick={() => setType(items.category_name)}
                                  className={type === items.category_name ? "active" : "null"}
                                >
                                  {items.category_name}
                                </li>
                              </Link>
                            </>
                          )
                        })
                      }

                    </ul>
                  </div>

                </div>
                <div className="col-lg-12">
                  <div className="row">
                    {card
                      .filter((item) => item.category_name === type)
                      .map((items) => {
                        return (
                          <>
                            <div className="col-lg-4">
                              <div
                                className="card mb-5 bg-dark"
                                style={{ borderRadius: "20px" }}
                              >
                                <div>
                                  <img
                                    className="shopItemImg"
                                    src={`${allImagesUrl}${items.image_1}`}
                                    alt="item image"
                                  />
                                </div>
                                <div className="card-body shopItemBody">
                                  <h4 className="mt-2 ms-2">
                                    {items.item_name}
                                  </h4>
                                  <hr className="bg-secondary" />
                                  <div className="d-flex justify-content-between">
                                    <div className="text-center ms-2">
                                      <p>Price</p>
                                      <h5>{items.actual_price}</h5>
                                    </div>
                                    <div className="text-center">
                                      <p>Item type</p>
                                      <h5>{items.category_name}</h5>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-center ">
                                    <div className="main-button ms-2 itemBtn">
                                      <Link
                                        state={{ items: items }}
                                        to={`/ShopScreem/${items.id}`}
                                      >
                                        View
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
