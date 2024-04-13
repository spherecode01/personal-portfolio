/*import React, { useEffect } from 'react';
import './style.scss';
import Arrow from '../../shared/arrow';
import { debounce } from 'lodash';

const Showcase = ({ data, transition, selectedProjectId, setSelectedProjectId }) => {
  
  useEffect(() => {
    const handleNetlifyRedirect = () => {
      console.log("Redirecting to Netlify project");
      const netlifyLinks = {
        3: 'https://benevolent-licorice-9e17cc.netlify.app', //Movie X
        2: 'https://chimerical-melomakarona-91f8f3.netlify.app', //Google project id
        5: 'https://calm-tulumba-fa2082.netlify.app', // Youtube
        8: 'https://rad-palmier-944588.netlify.app', // Admin Dashboard
        1: "https://polite-tulumba-c25fc1.netlify.app/", //Netflix clone
        7: "https://frolicking-longma-ec5ea9.netlify.app/", //Weather App
        6: "https://mellow-crostata-802642.netlify.app/", // Food App
        9: "https://splendorous-cassata-785abc.netlify.app/", // Creative Design
        10 : "https://precious-pavlova-f1b338.netlify.app/", //Business website
        11: "https://willowy-sopapillas-32f907.netlify.app/" // Ecommerce website
        // Add more mappings as needed
      };

      const netlifyLink = netlifyLinks[selectedProjectId];
      console.log("Netlify link:", netlifyLink);

     

    const debouncedRedirect = debounce(handleNetlifyRedirect, 300);

    debouncedRedirect();

    return () => {
      debouncedRedirect.cancel();
    };
  }, [selectedProjectId]);

  const handleProjectClick = (projectId) => {
    console.log("Selected Project ID:", projectId);

    setSelectedProjectId(projectId);
  };

  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
          onClick={() => handleProjectClick(project.id)}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <span className="text" >
                Project Details
              </span>
              <Arrow />
            </div>
          </div>
          <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;*/

import React, { useState } from 'react';
import './style.scss';
//import Arrow from '../../shared/arrow';
//import { debounce } from 'lodash';
//import projectsData from './projectData';

const Showcase = ({ data, transition, selectedProjectId, setSelectedProjectId }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (projectId, projectDetails) => {
    console.log("Selected Project ID:", projectId);
    setSelectedProjectId(projectId);
    const netlifyLinks = {
      // Define your Netlify links here
      3: 'https://benevolent-licorice-9e17cc.netlify.app', //Movie X
      2: 'https://chimerical-melomakarona-91f8f3.netlify.app', //Google project id
      5: 'https://main--frabjous-empanada-043ec5.netlify.app', // Youtube
      8: 'https://rad-palmier-944588.netlify.app', // Admin Dashboard
      1: "https://polite-tulumba-c25fc1.netlify.app/", //Netflix clone
      7: "https://frolicking-longma-ec5ea9.netlify.app/", //Weather App
      6: "https://mellow-crostata-802642.netlify.app/", // Food App
      9: "https://splendorous-cassata-785abc.netlify.app/", // Creative Design
      10 : "https://precious-pavlova-f1b338.netlify.app/", //Business website
      11: "https://willowy-sopapillas-32f907.netlify.app/", // Ecommerce website
      12: "https://guileless-zabaione-19ebfc.netlify.app", //Nike Store
      13: "https://lustrous-sunshine-39cc5a.netlify.app/", //Gallery
      14: "https://eclectic-stroopwafel-dbfb70.netlify.app/", //social-media
      15: "https://helpful-muffin-78b947.netlify.app", // hotel booking
      16: "https://celadon-shortbread-fdde87.netlify.app",// Spotify
      17: "https://verdant-manatee-1bf0be.netlify.app",// Snake game
      18: "https://mern-food-ordering-app-frontend-4egf.onrender.com",//food app
      19: "https://estatefrontend.onrender.com",//Estate App
    };

    const netlifyLink = netlifyLinks[projectId];
    console.log("Netlify link:", netlifyLink);

     if (netlifyLink) {
      window.open(netlifyLink, '_blank');
    }

    // You can also do something with projectDetails here if needed
   // console.log("Project Details:", projectDetails);
  };

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectHoverOut = () => {
    setHoveredProject(null);
  };

  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
          onClick={() => handleProjectClick(project.id, project.details)} // Pass project details
          onMouseEnter={() => handleProjectHover(project.id)}
          onMouseLeave={handleProjectHoverOut}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              {hoveredProject === project.id && (
                <div className="project-details">
                  {/* Display project details dynamically */}
                  {project.details && project.details.map((detail, index) => (
                    <p key={index}  style={{ color: 'black' }}> {detail}</p>
                  ))}
                </div>
              )}
              <span className="text">
                {hoveredProject === project.id ? "" : "Hover for Details"}
              </span>
             {/* <Arrow /> */}
            </div>
          </div>
          <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;



