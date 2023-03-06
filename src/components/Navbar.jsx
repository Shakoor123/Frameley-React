import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  const [state, setState] = useState(false);
  return (
    <div className="navbar">
      <div id="mySidenav" className="sidenav">
        <div className="sideNavTop">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="/">Home</a>
          <a href="#">DeSign Your Frame</a>
          <a href="/bulk-order">Custom Sizing/Bulk Orders</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/installation">Installation & Care</a>
        </div>
        <Link to={"/auth"}>
          <div className="sideNavBottom">
            <span>👤</span>

            <span className="SNVText">Log In</span>
            <span>│</span>
            <span className="SNVText">Sign Up</span>
          </div>
        </Link>
      </div>
      <span style={{ cursor: "pointer", fontSize: 30 }} onClick={openNav}>
        &#9776;
      </span>
      <Link to={"/"}>
        <img src="https://frameley.com/Logo.png" className="navLogo" alt="" />
      </Link>
      <div className="navChat">
        <img
          src="https://frameley.com/images/comment.png"
          alt=""
          className="navChatIcon"
        />
        <span className="navChatText">chat</span>
      </div>
    </div>
  );
}
