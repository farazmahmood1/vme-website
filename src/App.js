import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopMain from "./Components/Main/ShopMain";
import ProfileMain from "./Components/Main/ProfileMain";
import Footer from "./Components/Body/Footer";
import UserProfile from "./Components/Main/UserProfile";
import WorkingVideo from "./Components/Main/WorkingVideo";
import ShopScreem from "./Components/Main/ShopScreem";
import ItemForm from "./Components/Form.jsx/ItemForm";
import UserForm from "./Components/Form.jsx/UserForm";
import Decider from "./Components/Decider/Decider";

function App() {
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
      <Router>
        <Routes>
          <Route path="/" element={<Decider />} />

          <Route path="/ShopMain" element={<ShopMain />} />
          <Route path="/ProfileMain" element={<ProfileMain />} />
          <Route path="/WorkingVideo" element={<WorkingVideo />} />
          <Route path="/UserProfile/:id" element={<UserProfile />} />
          <Route path="/ShopScreem/:items" element={<ShopScreem />} />

          {/* <Route path="/UserForm" element={<UserForm />} /> */}
          <Route path="/ItemForm" element={<ItemForm />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
