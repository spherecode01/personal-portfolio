import React from "react";
import "./style.scss";
import hand from "../../images/hand.png";
import girl from "../../images/girl.png";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">There!!!</span>
            </span>
            <span className="big-text">Our Portfolio</span>
          </h1>
          <p>
          we craft digital experiences that transcend the ordinary. With a fusion of cutting-edge technology
           and creative expertise, we bring ideas to life in pixels and code. 
           Our commitment to innovation, user-centric design, 
           and flawless execution sets us apart. Join us on the journey where every line of 
           code tells a story, and every website we build is a testament to excellence in web development."
          </p>
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
