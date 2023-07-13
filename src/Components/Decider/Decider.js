import React, { useState, useEffect } from "react";
import HomePage from "../Main/HomePage";
import UserProfile from "../Main/UserProfile";

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

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import HomePage from "../Main/HomePage";
// import UserProfile from "../Main/UserProfile";

// const Decider = () => {
//   const [id, setId] = useState("");
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const idParam = urlParams.get("userID");
//     setId(idParam || "noID");
//   }, [location]);

//   return <>{id ? <UserProfile id={id} /> : <HomePage />}</>;
// };

// export default Decider;
