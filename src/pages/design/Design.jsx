import React from "react";
import "./Design.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Design = () => {
  const client = filestack.init("A6wqv2kBwT9qkYbvvn6Gcz");
  const handleClick = () => {
    client.picker().open();
  };
  return (
    <div>
      <Navbar />
      <div className="design section">
        <div className="designBody" onClick={handleClick}>
          <img
            className="designImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcau8AzfUYkjQr4-GH3-BoIcUqdCKAwjyug&usqp=CAU"
            alt=""
          />
          <span className="designText">Upload Photos</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Design;
