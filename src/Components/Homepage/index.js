import React from "react";
import VideoPlayer from "react-video-js-player";

import FaqsSection from "../FaqsSection/index.js";

import HomepageChildren from "../../Images/homepage-children.png";
import WhoAreWeImage from "../../Images/who-are-we.png";
import MissionImage from "../../Images/mission.png";
import video from "../../Images/React in 100 Seconds.mp4";

import "./index.css";

function HomePage() {
  const posterurl =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Freact-js-for-beginners-props-state-explained%2F&psig=AOvVaw0nRkiqL04jIMJjhEdENYfq&ust=1645105813800000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCFxO-uhPYCFQAAAAAdAAAAABAD";

  return (
    <div>
      <div className="app-content">
        <div className="homepage-main">
          <div className="homepage-main-content">
            <h1>Creating Awareness about Rare Diseases</h1>
            <p>Support a marvellous Cause, be a part of the change</p>
            <button>Get Involved</button>
          </div>
          <div>
            <img
              src={HomepageChildren}
              alt="Diseased Children"
              className="homepage-main-image"
            />
          </div>
        </div>
        <div className="homepage-explore">
          <h1 className="homepage-explore-heading">Explore</h1>
          <div className="homepage-explore-content">
            <a className="homepage-explore-link" href="/">
              About Rare Diseases
            </a>
            <a className="homepage-explore-link" href="/">
              Rare Diseases Help Line
            </a>
            <a className="homepage-explore-link" href="/">
              Living with Rare Diseases
            </a>
          </div>
        </div>
        <div className="homepage-video-section">
          <h1>A Glimpse of SFRD</h1>
          <VideoPlayer
            poster={posterurl}
            src={video}
            className="video-player"
          />
        </div>
        <div className="who-section">
          <img src={WhoAreWeImage} alt="who are we" className="who-image" />
          <div className="who-content">
            <h1>Who we Are?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem vitae ipsam laudantium expedita libero, tempora dicta
              id ratione, nemo quis veniam doloremque ducimus corporis enim
              harum quasi laborum quibusdam hic!
            </p>
            <button>Know More</button>
          </div>
        </div>
        <div className="mission-section">
          <img src={MissionImage} alt="Our Mission" className="mission-image" />
          <div className="mission-content">
            <h1>Our Mission Statement</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              dignissimos modi dolorum maiores ullam velit saepe necessitatibus
              amet et, sequi vel. Corporis, ipsam. Expedita maxime dolorum
              molestias illum cupiditate quis.To Know More.
              <a href="/">Click Here</a>
            </p>
          </div>
        </div>
        <FaqsSection />
      </div>
    </div>
  );
}

export default HomePage;
