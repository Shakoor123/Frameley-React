import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Installation.css";
const Installation = () => {
  return (
    <div>
      <Navbar />
      <div className="installationBody section">
        <div className="installationItem">
          <div className="installationTexts">
            <span className="installationTitle">STEP-1</span>
            <span className="installationText">
              Plan out and space out your frames, preferably place them on the
              floor to visualize your pattern
            </span>
          </div>
          <div className="installationVideos">
            <video src="https://frameley.com/Images/step0.mp4" autoPlay />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Installation;
