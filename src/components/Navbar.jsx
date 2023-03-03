import React, { useState } from "react";
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
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span style={{ cursor: "pointer", fontSize: 30 }} onClick={openNav}>
        &#9776;
      </span>
      <img src="https://frameley.com/Logo.png" className="navLogo" alt="" />
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
