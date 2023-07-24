import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import allImagesUrl from "../SourceFiles/baseimageurl";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import axios from "axios";
import Baseurl from "../SourceFiles/url";

const ShopScreem = () => {
  const { items } = useParams();

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [addCount, setAddCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    topFunction();
    fetchData();
  }, []);

  const fetchData = () => {
    setLoader(true);
    const userObj = {
      id: items
    }

    axios.post(`${Baseurl}getproducts_with_productid`, userObj)
      .then((res) => {
        setData(res.data.Data);
        console.log(res)
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const colorValidation = () => {
    if (selectedColor === "") {
      setError(true);
      setErrorMessage('Seems you forgot to select your favorite color');
    } else {
      setError(false);
      setErrorMessage('');
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const incrementCount = () => {
    setAddCount(addCount + 1);
  };
  const decrementCount = () => {
    if (addCount !== 1) {
      setAddCount(addCount - 1);
    }

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
              <h6>DigiCard Market</h6>
              <h2>Buy Your DigiCard Now.</h2>
              <span className="">
                <Link state={{ values: "Card" }} to="/ShopMain">
                  Shop
                </Link>
                &gt; <a style={{ cursor: "default" }}>Buy Item</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="currently-market">
        <div className="container">
          {

            loader === true ?

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

              :

              data.map((items) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="product-image">
                          <div className="product-image-main">
                            <img src={`${allImagesUrl}${items.image_1}`} alt id="product-main-image" />
                          </div>
                          <div className="product-image-slider">
                            <img src={`${allImagesUrl}${items.image_1}`} alt className="image-list" />
                            <img src={`${allImagesUrl}${items.image_2}`} alt className="image-list" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">

                        <div className="product">
                          <div style={{marginTop:'20px'}}>
                            <h2>{items.name}</h2>
                          </div>
                          <div className="product-rating">
                            <span><i className="bx bxs-star" /></span>
                            <span><i className="bx bxs-star" /></span>
                            <span><i className="bx bxs-star" /></span>
                            <span><i className="bx bxs-star" /></span>
                            <span><i className="bx bxs-star" /></span>
                            <span className="review text-secondary">(47 Review)</span>
                          </div>
                          <div className="product-price">
                            <span className="offer-price text-white">{items.actual_price} PKR</span>
                            <span className="sale-price text-secondary">{items.item_price} PKR</span>
                          </div>
                          <div className="product-details">
                            <h3 className="mt-4">Description:</h3>
                            <p>{items.description}</p>
                          </div>

                          <div className="ms-auto me-3">
                            <h6>Quantity:</h6>
                            <div className="mt-2">

                              <button
                                className="btn btn-secondary me-2 "
                                style={{ backgroundColor: "#7453fc", borderRadius: '100%' }}
                                onClick={decrementCount}
                              >
                                <i className="fa-solid fa-angle-left" />
                              </button>

                              <label
                                className="text-white"
                                htmlFor="exampleInputPassword1"
                              >
                                {addCount}
                              </label>
                              <button
                                className="btn btn-secondary ms-2 "
                                style={{ backgroundColor: "#7453fc", borderRadius: '100%' }}
                                onClick={incrementCount}
                              >
                                <i className="fa-solid fa-angle-right" />
                              </button>
                            </div>
                          </div>


                          <div className="product-color">
                            <h4>Color</h4>
                            <div className="color-layout mt-3">

                              {items.item_colour.map((color) => (
                                <button
                                  key={color}
                                  className={`btn-shop me-1 ${selectedColor === color ? "btn-active" : ""}`}
                                  style={{
                                    backgroundColor: color,
                                    outline: selectedColor === color ? "2px solid black" : "none",
                                  }}
                                  onClick={() => handleColorSelection(color)}
                                ></button>
                              ))}
                            </div>


                          </div>

                          {
                            errorMessage !== "" && error === true && selectedColor === "" ? (
                              <p className="text-danger">Seems you forgot to select your favorite color</p>
                            ) : null
                          }


                          <div
                            className="mt-4 d-flex">

                            {
                              selectedColor !== "" ?
                                <Link
                                  to="/ItemForm"
                                  state={{
                                    counter: addCount,
                                    itemColor: selectedColor,
                                    item: data,
                                  }}
                                  className="text-center buttonx col-11"
                                >
                                  BUY NOW
                                </Link> :
                                <button
                                  onClick={colorValidation}
                                  className="text-center buttonx col-11"
                                >
                                  BUY NOW
                                </button>
                            }

                            <i className="fa-2x ms-2 mt-1 fa-solid fa-heart text-danger" />
                          </div>
                          <p
                            style={{ fontSize: "13px" }}
                            className="text-secondary text-center"
                          >
                            Payment method is COD, other methods are coming soon!
                          </p>

                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="w-50 mt-5"
                        style={{
                          height: "2px",
                          backgroundColor: '#7453fc',
                        }}
                      />
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="mt-4">{items.category_name}</h3>

                          <p>{items.category_description}</p>

                        </div>
                      </div>
                    </div>

                  </>
                )
              })
          }

        </div>
      </div>
    </div>
  );
};

export default ShopScreem;
