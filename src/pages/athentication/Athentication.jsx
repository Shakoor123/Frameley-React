import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Athentication.css";
const Athentication = () => {
  return (
    <div>
      <Navbar />
      <div className="auth section">
        <div className="authForm">
          <span className="authTitle">Welcome</span>
          <input
            type="text"
            placeholder="PLEASE ENTER YOUR EMAIL ID"
            className="authInput"
          />
          <button className="submit">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Athentication;
