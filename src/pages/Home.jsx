import React from "react";
import Navbar from "../components/Navbar";
import Carocel from "../components/Carocel";
import "./Home.css";
import HomeCards from "../components/HomeCards";
import HomeBlogs from "../components/HomeBlogs";
import YoutubeEmbed from "../components/YoutubeVideos";
import Footer from "../components/Footer";
export default function Home() {
  let ytIds = [
    {
      id: 0,
      embedId: "uZM7m3XbuPw",
    },
    {
      id: 1,
      embedId: "W-0vAYPs7n8",
    },
    {
      id: 2,
      embedId: "EdtNEW4nFcA",
    },
  ];
  return (
    <div>
      <Navbar />
      <Carocel />
      <section className="section">
        <div className="homeTop">
          <span className="HomeTopTitle">
            From home decor to the last-minute gift, Frameley has customized
            photo frames for all your needs, the way you want them. Starting at
            just Rs.333 per frame.
          </span>
          <span className="HomeTopText">
            Frameley realizes the desire to cherish memories and beautify walls
            with a platform that makes it happen in just a few taps. As
            affordable and effortless as it may be, you can be rest assured that
            picture and frame quality are not diminished. Now does that sound
            like a go-to solution for most gifting and decorating purposes?
            Because that's exactly what we're offering.
          </span>
        </div>
      </section>
      <HomeCards />
      <section className="section">
        <div className="homeTop">
          <span className="HomeTopTitle">
            Your one stop shop for Personalized Photo Frames Online in India
          </span>
          <span className="HomeTopText">
            Give your loved ones something special, which can be personalized,
            and will stir hundreds of memories and emotions inside the hearts of
            your loved ones, the picture frame is just from the awesome
            selection of custom photo frames online from Frameley. We are the
            well-known personalized photo frames online in India. Capture your
            undying love for family or friends, and give them the best
            typographic frames available here. Frameley also offers an extensive
            selection of framing supplies, framing accessories, and photo print
            preservation options all at an affordable price, making us your
            one-stop online shop in India for all of your custom frame and photo
            projects.
          </span>
        </div>
      </section>
      <HomeBlogs />
      <section className="section ytVideos">
        {ytIds.map((yt) => (
          <YoutubeEmbed embedId={yt.embedId} />
        ))}
      </section>
      <section className="section">
        <div className="homeTop">
          <span className="HomeTopTitle">
            Get Personalised Photo Frames from Frameley
          </span>
          <span className="HomeTopText">
            If you are planning on attending a trade show, planning a family
            gathering, or looking for wedding favor, do not waste your time
            searching for useless gifts, order these personalized photo frames
            and see the difference they make in your branding or personal
            goodwill. Personalized photo frames are wonderful gifts for friends
            and family or can be used as decor items for home and office space.
            They have a unique personal touch that makes them memorable. At
            Frameley, we help you create personalized photo frames. You can
            upload your photos and see in real-time how your frame will look.
            The photo can be of you or those of your loved ones. It might be a
            collage, a single image of you, or a photo of you with your family
            or friends. Frameley has a large variety of customized frames with
            different designs and sizes. We meet your customization demands
            according to your specifications. Getting a personalized photo frame
            is one of the best ideas for gifting or wall decoration purposes.
          </span>
        </div>
      </section>
      <section className="section">
        <div className="homeTop">
          <span className="HomeTopTitle">
            Peel and Stick Photo Frames Online in India
          </span>
          <span className="HomeTopText">
            Design one that features a special someone in your life, or makes a
            theme stick photo frame that features photos of your favorite
            holiday vacations or events. No nails needed! Just peel off the
            protective label and stick it where you want! They are reusable peel
            and stick frames. And the best part is they will not damage the wall
            surface. Start making walls beautiful again using Frameley frames.
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}
