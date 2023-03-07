import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CopyRight from "./copyRight/CopyRight";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer section">
        <div className="footerColum">
          <span className="footerTitle">Need Help?</span>
          <Link to={"/faqs"} style={{ textDecoration: "none" }}>
            <span className="footerText">➤FAQs</span>
          </Link>
          <Link to={"/contact-us"} style={{ textDecoration: "none" }}>
            <span className="footerText">➤Contact Us</span>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span className="footerText">➤Chat With Us</span>
          </Link>
          <Link to={"/installation"} style={{ textDecoration: "none" }}>
            <span className="footerText">➤Installation & Care</span>
          </Link>
        </div>
        <div className="footerColum">
          <span className="footerTitle">Legal Stuff</span>
          <span className="footerText">➤Privacy Policy</span>
          <span className="footerText">➤Refund Policy</span>
          <span className="footerText">➤Terms & Conditions</span>
          <span className="footerText">➤Shipping Policy</span>
        </div>
        <div className="footerColum">
          <span className="footerTitle">Need Help?</span>
          <Link
            to={"https://instagram.com/yourframeley"}
            style={{ textDecoration: "none" }}
          >
            <span className="footerText">➤Instagram</span>
          </Link>
          <Link
            to={"https://facebook.com/yourframeley"}
            style={{ textDecoration: "none" }}
          >
            <span className="footerText">➤Facebook</span>
          </Link>
          <Link
            to={"https://twitter.com/yourframeley"}
            style={{ textDecoration: "none" }}
          >
            <span className="footerText">➤Twitter</span>
          </Link>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
