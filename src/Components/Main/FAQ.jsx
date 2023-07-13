import { Link } from "react-router-dom";
import Instructions from "../Homepage/Instructions";
import Categories from "../Homepage/HotCollection";
import Banner from "../Homepage/Banner";
import React, { useEffect, useState } from "react";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import MainLogo from "../../Components/SourceFiles/images/MainLogo.png";
import { toast } from "react-toastify";

const FAQ = () => {
  const [userID, setUserID] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  useEffect(() => {
    SetLocalLogin();
  }, []);

  function deleteUserFromLocalStorage() {
    localStorage.removeItem("user");
    toast.success("Successfully logged out");
    setInterval(() => {
      window.location.reload();
    }, 1500);
  }

  const SetLocalLogin = async () => {
    try {
      let user = await localStorage.getItem("user");
      let parsed_user = JSON.parse(user);
      if (parsed_user) {
        setUserID(parsed_user.id);
      }
    } catch {
      return null;
    }
  };

  return (
    <div>
      <div className="page-heading normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h6 className="">DigiCard Market</h6>
              <h2>Buy Your DigiCard Now.</h2>
              <span className="">
                <Link to="/">Home</Link> &gt;
                <a style={{ cursor: "default" }}>Shop</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="categories-collections" style={{ paddingTop: "0px" }}>
        <div className="container">
          <div className="row">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
