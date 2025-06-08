import React from "react";
import "../assets/styles/shortintro.scss";
import coverImg from "../assets/images/cover.jpg";
import image1 from "../assets/images/image1.jpg";

export default function ShortIntro () {
  return (
    <div id="short-intro" className="short-intro">
      <div className="profile">
        {/* <div className="bg-img"></div> */}
        <div id="title">
          <p id="greeting">Hello, I'm</p>
          <p id="name">Bosi Chen</p>
          <p id="bio">A Full Stack Web Developer</p>
        </div>
        <div id="cover-img">
          <img id="cover" src={coverImg} alt="cover" />
        </div>
      </div>
      <div className="contact-me">
      </div>
      <div className="summary">
        <div id="summary-img">
          <img id="summary-image" src={image1} alt="image1" />
        </div>
        <h2>About Me</h2>
        <div className="intro-text" id="intro-text">
          <p className="content">An enthusiastic Full Stack Developer.</p>
          <p className="content">Skilled with JavaScript, React.js, HTML and CSS front-end developing. Also strong in backend with C#, php and Python. Good at database design and management, and SQL languages as well.</p>
          <p className="content">A fast-learner and can be kept up to date with the new introduced contents. Indeed enjoys the programming process in web development and is willing to learn to become a competitive developer.</p>
          {/* <p id="more"><a id="more" href="#nav">more...</a></p> */}
        </div>
      </div>
    </div>
  );
};