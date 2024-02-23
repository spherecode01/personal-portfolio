import React, { useRef, useEffect } from "react";
import "./style.scss";
import develop from "../../images/developer.png";
import hand from "../../images/hand.png";
import Typed from "typed.js";
import { useState } from "react";

const IntroContent = React.memo(() => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
      setShowMore(!showMore);
  };
  /*const toggleShowLess = () => {
    setShowMore(showMore);
  }*/
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FullStack Developer", "Web Developer"],
      typeSpeed:  50,
      backSpeed:  50,
      backDelay:  800,
      loop: true
    };

    typedRef.current = new Typed(".typed-text", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []); // Assuming there are no dependencies, so the effect runs only once

  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img className="hands" src={hand} alt="" loading="lazy" />
              </span>
              <span className="text">There!</span>
            </span>
            <span className="big-text">My Portfolio </span>
          </h1>
          <span className="typed-text"> </span>
          <p className={`description ${showMore ? 'show-more' : ''}`}>
            As a seasoned FullStack Javascript developer, I specialize in crafting dynamic and intuitive web applications that resonate with users and drive results for businesses and individuals alike. From responsive front-end design to robust back-end development, I bring a holistic approach to every project, ensuring seamless functionality and an exceptional user experience. With a commitment to quality and attention to detail, I thrive on tackling challenges and exceeding client expectations.
          </p>
          {showMore ? (
    <button onClick={toggleShowMore}>Show Less</button>
) : (
    <button className="btn" onClick={toggleShowMore}>Read More</button>
)}

                
                
        </div>
        <div className="right-col">
          <img src={develop} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
});

export default IntroContent;

