import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="bg-purple" style={{height:'100vh'}}>
      <div className="stars">
        <div className="central-body">
          <div className="image-404 text-white" style={{ fontSize: "150px" }}>
            <b>404</b>
          </div>
          <p className="mb-4" style={{ letterSpacing: "3px" }}>
            Sorry, an error has occurred, Request page not found!
          </p>
          <Link to="/" className="buttonx">
            GO BACK HOME
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            style={{ width: "40px" }}
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              style={{ width: "100px" }}
            />
            <img
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              style={{ width: "80px" }}
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              style={{ width: "140px" }}
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
