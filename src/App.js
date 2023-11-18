import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Body/Footer";
import UserProfile from "./Components/Main/UserProfile";
import WorkingVideo from "./Components/Main/WorkingVideo";
import BuyNow from "./Components/Main/BuyNow";
import ItemForm from "./Components/Form.jsx/ItemForm";
import UserForm from "./Components/Form.jsx/UserForm";
import Decider from "./Components/Decider/Decider";
import ErrorPage from "./Components/Main/ErrorPage";
import MyOrders from "./Components/Main/MyOrders";
import FAQ from "./Components/Main/FAQ";
import Navbar from "./Components/Body/Navbar";
import Shop from "./Components/Main/Shop";
import Blogs from "./Components/Main/Blogs";
import PreLoader from "./Components/Body/PreLoader";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    topFunction();
  }, []);

  return (
    <div>
     {
      loading ? ( <PreLoader/> ) : (
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Decider />} />
          <Route path="/WorkingVideo" element={<WorkingVideo />} />
          <Route path="/Shop-now" element={<Shop />} />
          <Route path="/Buy-now/:items" element={<BuyNow />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/UserProfile/:id" element={<UserProfile />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/ItemForm" element={<ItemForm />} />
          <Route path="/Our-Blogs" element={<Blogs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
      )
     }
    </div>
  );
}

export default App;

{/* <div>
<Router>
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <Decider />
        </div>
      }
    />
    <Route
      path="/WorkingVideo"
      element={
        <div>
          <Navbar />
          <WorkingVideo />
        </div>
      }
    />
    <Route
      path="/Shop-now"
      element={
        <div>
          <Navbar />
          <Shop />
        </div>
      }
    />
    <Route
      path="/Buy-now/:items"
      element={
        <div>
          <Navbar />
          <BuyNow />
        </div>
      }
    />
    <Route
      path="/MyOrders"
      element={
        <div>
          <Navbar />
          <MyOrders />
        </div>
      }
    />
    <Route
      path="/UserProfile/:id"
      element={<UserProfile />}
    />
    <Route
      path="/FAQ"
      element={
        <div>
          <Navbar />
          <FAQ />
        </div>
      }
    />
    <Route
      path="/ItemForm"
      element={
        <div>
          <Navbar />
          <ItemForm />
        </div>
      }
    />
    <Route
      path="/Our-Blogs"
      element={
        <div>
          <Navbar />
          <Blogs />
        </div>
      }
    />
    <Route
      path="*"
      element={
        <div>
          <Navbar />
          <ErrorPage />
        </div>
      }
    />
  </Routes>
  <Footer />
</Router>
</div> */}