import React from "react";
import { Link } from "react-router-dom";
import "./HomeBlogs.css";
const HomeBlogs = () => {
  return (
    <div className="homeBlogs section bggGray">
      <div className="homeBlog ">
        <div className="homeblogImages">
          <img
            src="https://frameley.com/images/web-1.png"
            alt=""
            className="homeBlogimage"
          />
        </div>
        <div className="homeBlogTexts">
          <span className="homeBlogTitle">
            Just Upload, Choose Your Size & Check Out
          </span>
          <span className="homeBlogText">
            Our powerful design page has been custom curated so that customers
            can simply upload, choose the size and other custom options, check
            out and it's on the way to you!
          </span>
        </div>
      </div>
      <div className="homeBlog rv">
        <div className="homeBlogTexts">
          <span className="homeBlogTitle">Thin & Light Frames</span>
          <span className="homeBlogText">
            Proprietary thin profile mouldings that help your pictures or art
            work stand out. Small scale frames come with a re-stickable backing
            that helps you stick your frames on your wall, damage free
          </span>
        </div>
        <div className="homeblogImages">
          <img
            src="https://frameley.com/images/PV2.png"
            alt=""
            className="homeBlogimage"
          />
        </div>
      </div>
      <div className="homeBlog">
        <div className="homeblogImages">
          <img
            src="https://frameley.com/images/Web-3.png"
            alt=""
            className="homeBlogimage"
          />
        </div>
        <div className="homeBlogTexts">
          <span className="homeBlogTitle">Your Frame, Your Way</span>
          <span className="homeBlogText">
            Customized photo frames and framed art is our forte. Choose from 4
            different and elegant color options, laminated vinyl that give your
            pictures a premium feel or go with the classic canvas for an
            artistic look.
          </span>
        </div>
      </div>
      <div className="homeBlog rv">
        <div className="homeBlogTexts">
          <span className="homeBlogTitle">
            Looking for Custom Sizing or Bulk Pricing?
          </span>
          <span className="homeBlogText">
            Give us a ring, WhatsApp us, DM us on instagram or just fill out
            this form with the details so that we can get back to you regarding
            your requirements. We're always just a call or a message away!
          </span>
          <Link to={"/bulk-order"} style={{ textDecoration: "none" }}>
            <span className="GetInTuch">Get In Tuch</span>
          </Link>
        </div>
        <div className="homeblogImages">
          <img
            src="https://frameley.com/images/PV4.png"
            alt=""
            className="homeBlogimage"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
