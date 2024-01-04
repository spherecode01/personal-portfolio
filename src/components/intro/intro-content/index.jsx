import React from "react";
import "./style.scss";
import hand from "../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
//import newedit from "../../images/newedit.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
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
         {/* <CallToAction text="Contact me"  /> */}
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
          { /*<div className="highlights horizontal">
             <div className="icon">
                       <BsAwardFill /> 
  </div> 
  <div className="text">Best Design Award</div> 
  </div> */ }
         { /*<div className="highlights verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
</div> */ }
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
