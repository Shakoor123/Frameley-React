import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer section">
      <div className="footerColum">
        <span className="footerTitle">Need Help?</span>
        <span className="footerText">➤FAQs</span>
        <span className="footerText">➤Contact Us</span>
        <span className="footerText">➤Chat With Us</span>
        <span className="footerText">➤Installation & Care</span>
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
        <span className="footerText">➤Instagram</span>
        <span className="footerText">➤Facebook</span>
        <span className="footerText">➤Twitter</span>
      </div>
    </div>
  );
};

export default Footer;
