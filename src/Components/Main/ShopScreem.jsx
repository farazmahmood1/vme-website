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
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [addCount, setAddCount] = useState(1);
  const [getColor, setColor] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [selectedColor, setSelectedColor] = useState("");


  const { items } = useParams();


  useEffect(() => {
    topFunction();
    fetchData();
  }, []);

  const fetchData = () => {
    setLoader(true);
    const userObj = {
      id: items
    }

    axios
      .post(`${Baseurl}getproducts_with_productid`, userObj)
      .then((res) => {
        setData(res.data.Data);
        console.log(res)
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };



  const changeClass = () => {
    setIsActive((current) => !current);
  };

  const incrementCount = () => {
    setAddCount(addCount + 1);
  };
  const decrementCount = () => {
    if (addCount !== 0) {
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
      {/* Navbar */}
      <div>
        <header className="header-area header-sticky">
          <div className="container">
            <div
              className="container-fluid"
              style={{ borderRadius: "50px", backgroundColor: "#fff" }}
            >
              <nav
                className="navbar  navbar-expand-lg navbar-light "
                style={{ borderRadius: "50px", backgroundColor: "#fff" }}
              >
                <div className="container-fluid">
                  <p>
                    <Link to="/" className="logo">
                      <img
                        src="./source/assets/images/logo.png"
                        alt="icon_image"
                        style={{ height: "54px" }}
                      />
                    </Link>
                  </p>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav  ms-auto">
                      <li className="nav-item ">
                        <p className="nav-link me-4 " aria-current="page">
                          <b>
                            <Link to="/" className="text-secondary">
                              Home
                            </Link>
                          </b>
                        </p>
                      </li>
                      <li className="nav-item ">
                        <p
                          className={"nav-link me-4 enjoy"}
                          aria-current="page"
                        >
                          <b>
                            <Link
                              state={{ values: "Card" }}
                              className="text-secondary"
                              to="/ShopMain"
                            >
                              Shop
                            </Link>
                          </b>
                        </p>
                      </li>
                      <li className="nav-item ">
                        <p className={"nav-link me-4 "} aria-current="page">
                          <b>
                            <Link to="/ProfileMain" className="text-secondary">
                              Profiles
                            </Link>
                          </b>
                        </p>
                      </li>

                      <li className="nav-item ">
                        <p
                          className={"nav-link borderLogin  me-4 "}
                          aria-current="page"
                        >
                          <b>
                            <p
                              onClick={() => setOpenModal(true)}
                              className="text-secondary"
                              style={{ cursor: "pointer" }}
                            >
                              Login
                            </p>
                          </b>
                        </p>
                      </li>

                      <li className="nav-item ">
                        <p
                          className={"nav-link borderSignup me-4 "}
                          aria-current="page"
                        >
                          <b>
                            <p
                              onClick={() => setOpenSignUp(true)}
                              style={{ cursor: "pointer" }}
                              className="text-white"
                            >
                              SIgn up for free
                            </p>
                          </b>
                        </p>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle mt-1"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-gear" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li className="d-flex updateNav">
                            <i className="fa-solid fa-pen mt-2 ms-2" />
                            <a
                              className="dropdown-item updateNav"
                              target={"_blank"}
                              href="https://digicarduserdashboard.netlify.app/"
                            >
                              Update Profile
                            </a>
                          </li>
                          <li className="d-flex updateNav">
                            <i className="fa-solid fa-newspaper mt-2 ms-2" />
                            <a
                              className="dropdown-item updateNav"
                              target={"_blank"}
                              href="https://digicarduserdashboard.netlify.app/"
                            >
                              What`s New
                            </a>
                          </li>
                          <li className="d-flex updateNav">
                            <i className="fa-solid fa-question mt-2 ms-2" />
                            <Link
                              className="dropdown-item updateNav"
                              to="/WorkingVideo"
                            >
                              Need Help
                            </Link>
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

        {openModal && <SignIn setOpenModal={setOpenModal} />}
        {openSignUp && <SignUp setOpenSignUp={setOpenSignUp} />}
      </div>

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
                          <div className="product-title">
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


                          <div className="mt-4 d-flex">
                            <Link
                              to="/ItemForm"
                              state={{
                                counter: addCount,
                                itemColor: getColor,
                                item: data,
                              }}
                              className="text-center buttonx col-11"
                            >
                              BUY NOW
                            </Link>
                            <i className="fa-2x ms-2 mt-1 fa-solid fa-heart text-danger" />
                          </div>
                          <p
                            style={{ fontSize: "11px" }}
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
