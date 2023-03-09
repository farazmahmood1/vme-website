import React, { useState, useEffect } from "react";
import { Link, Route, Router, Routes, useParams } from "react-router-dom";
import Discover from "../Explore/Discover";
import HomePage from "../Main/HomePage";
import UserProfile from "../Profile/UserProfile";

const Decider = () => {
  const [id, setId] = useState("");
  function getLink() {
    const url = `${window.location.href}`;
    const part = url.split("?");
    const path = part[1];
    setId(path !== null ? path : "noID");
  }

  useEffect(() => {
    getLink();
  }, []);

  return <>{!id ? <HomePage /> : <UserProfile id={id} />}</>;
};

export default Decider;
