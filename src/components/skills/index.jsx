import React from "react";
import "./style.scss";
import Section from "../shared/section";
import skilllogo from "../images/skilllogo.png";


const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={skilllogo} alt="skilllogo"/>
         
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
          we pride ourselves on a dynamic team of skilled professionals who seamlessly blend creativity 
          and technical expertise. From proficient coding to innovative design, our team is well-versed in 
          the latest technologies, ensuring that every project we undertake is a showcase of precision, 
          functionality, and aesthetic appeal. With a commitment to staying at the forefront of 
          web development trends, we bring a diverse skill set that transforms concepts into 
          captivating online experiences."
          
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
