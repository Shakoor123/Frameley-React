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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span className="p">Home</span>
          </Link>
          <Link to={"/design"} style={{ textDecoration: "none" }}>
            <span className="p">DeSign Your Frame</span>
          </Link>
          <Link to={"/bulk-order"} style={{ textDecoration: "none" }}>
            <span className="p">Custom Sizing/Bulk Orders</span>
          </Link>
          <Link to={"/faqs"} style={{ textDecoration: "none" }}>
            <span className="p">FAQs</span>
          </Link>
          <Link to={"/contact-us"} style={{ textDecoration: "none" }}>
            <span className="p">Contact Us</span>
          </Link>
          <Link to={"/installation"} style={{ textDecoration: "none" }}>
            <span className="p">Installation & Care</span>
          </Link>
        </div>
        <Link to={"/auth"} style={{ textDecoration: "none" }}>
          <div className="sideNavBottom">
            <span>👤</span>

            <span className="SNVText p">Log In</span>
            <span>│</span>
            <span className="SNVText p">Sign Up</span>
          </div>
        </Link>
      </div>
      <span style={{ cursor: "pointer", fontSize: 30 }} onClick={openNav}>
        &#9776;
      </span>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src="https://frameley.com/Logo.png" className="navLogo" alt="" />
      </Link>
      <div
        className="navChat"
        style={{ cursor: "pointer" }}
        onClick={() => {
          load();
        }}
      >
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
