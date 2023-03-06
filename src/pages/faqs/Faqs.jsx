import React from "react";
import "./Faqs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Faq from "../../components/faq/Faq";

const Faqs = () => {
  return (
    <div>
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
};

export default Faqs;
