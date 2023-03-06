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
            <div className="installationDatas">
              <span className="installationTitle">STEP-1</span>
              <span className="installationText">
                Plan out and space out your frames, preferably place them on the
                floor to visualize your pattern
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step0.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
        <div className="installationItem installationRev">
          <div className="installationTexts">
            <div className="installationDatas">
              <span className="installationTitle">STEP-2</span>
              <span className="installationText">
                Wipe the surface with a dry cloth and make sure it is free of
                dust or dirt that might stick on the adhesive strip. DO NOT
                stick on uneven or poorly painted surfaces as the paint may chip
                off resulting in wall damage as well as degradation of the
                adhesive tape
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step1.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
        <div className="installationItem">
          <div className="installationTexts">
            <div className="installationDatas">
              <span className="installationTitle">STEP-3</span>
              <span className="installationText">
                Peel the backing from the adhesive pad on the back of the frame
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step2.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
        <div className="installationItem installationRev">
          <div className="installationTexts">
            <div className="installationDatas">
              <span className="installationTitle">STEP-4</span>
              <span className="installationText">
                Press the top of the frame firmly against the wall to secure it
                in place
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step3.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
        <div className="installationItem">
          <div className="installationTexts">
            <div className="installationDatas">
              <span className="installationTitle">REMOVING THE FRAME</span>
              <span className="installationText">
                Remove the frame from the wall by pulling the bottom of the
                frame upwards in a gentle manner Please do not pull sharply or
                apply excessive force as this may damage the adhesive strip and
                affect the longevity
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step4.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
        <div className="installationItem installationRev">
          <div className="installationTexts">
            <div className="installationDatas">
              <span className="installationTitle">CARING FOR YOUR FRAME</span>
              <span className="installationText">
                ⦾ Stick on a well painted, smooth and clean surface
              </span>
              <span className="installationText">
                ⦾ Dust/clean without applying unnecessary pressure to the frames
              </span>
              <span className="installationText">
                ⦾ Keep away from direct sunlight and moisture
              </span>
              <span className="installationText">
                ⦾ Warning: Please do not stick the frame on poorly painted
                walls, this will result in wall damage. Make sure your wall is
                well painted and free of cracks.
              </span>
            </div>
          </div>
          <div className="installationVideos">
            <video
              src="https://frameley.com/Images/step0.mp4"
              muted
              autoPlay
              loop
              className="installationVideo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Installation;
