import React from "react";
import "./ContactUsDetails.css";
const ContactUsDetails = () => {
  return (
    <div className="cud">
      <div className="cudItem">
        <span className="cudTitle">Address:</span>
        <span className="cudText">Pearl Venture, First Floor, 190/218,</span>
        <span className="cudText">Outer Ring Road, Agara, 1st Sector,</span>
        <span className="cudText">HSR Layout, Bangalore - 560102, KA</span>
      </div>
      <div className="cudItem">
        <span className="cudTitle">Call/WhatsApp:</span>
        <span className="cudText">+917975339182</span>
      </div>
      <div className="cudItem">
        <span className="cudTitle">E-Mail:</span>
        <span className="cudText">help@frameley.com</span>
      </div>
    </div>
  );
};

export default ContactUsDetails;
