import React from "react";
import "./ConstactUs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactUsDetails from "../../components/contactUsDetails/ContactUsDetails";

const ConstactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="constactUs">
        <h2 className="constactUsTitle">Contact Us</h2>
        <img
          src="https://frameley.com/images/contact.jpg"
          className="contactUsImage"
          alt=""
        />
        <div className="section constactUsBody">
          <span className="contactUsText">
            Frameley is the most convenient way to get home decor, gift your
            loved ones and cherish your most loved memories. Just upload your
            pictures, choose your frame type, checkout and your customised photo
            frames are on your way!
          </span>
          <span className="contactUsText">
            Customer satisfaction is our number 1 priority, you can reach us by
            the on site chat on the top right, WhatsApp, email or social media
            DM's.
          </span>
          <ContactUsDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConstactUs;
