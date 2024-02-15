import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";



const projectsData = [
    {
        id: 1,
        name: "Netflix Clone",
        tags: ["web-app",],
        media: {
            thumbnail: require("../images/nf.jpg"),
        },
        details: [
          "This project is a clone of the Netflix website.movie browsing, and search functionality.",
          "",
        ]
    },
   /*{
        id: 2,
        name: "Google",
        tags: ["web-page"],
        media: {
            thumbnail: require("../images/google.jpg"),
        },
        details: [
          "This is a Google Clone.Proper Search Engine and search functionality.",
          "",
        ]
    },*/
    {
        id: 3,
        name: "Movie X",
        tags: ["web-page"],
        media: {
            thumbnail: require("../images/movie.jpg"),
        },
        details: [
          "This is a Online Streaming Platform, To stream movies and webseries you like.",
        ]
    },
    {
        id: 4,
        name: "Fitness Tracker",
        tags: ["web-app",],
        media: {
            thumbnail: require("../images/fitness.jpg"),
        },
        details: [
          "This is a Fitness Tracker Webapplication where you can track your Progress!!.",
        ]
    },
    {
        id: 5,
        name: "Youtube Clone",
        tags: [ "web-page"],
        media: {
            thumbnail: require("../images/youtube.jpg"),
        },
        details: [
          "Welcome to the YouTube Clone, Where you can surf vidoes of your choise",
        ]
    },
    {
        id: 13,
        name: "Gallery",
        tags: ["product",],
        media: {
            thumbnail: require("../images/gallery.jpg"),
        },
        details: [
          "Welcome to your gallery, where your photos are saved",
        ]
    },
    {
        id: 7,
        name: "Weather App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../images/weather2.jpg"),
        },
        details: [
          "Want to see the Live Weather Update then chech out this application.",
        ]
    },
    {
        id: 8,
        name: "Admin Dashboard",
        tags: [ "web-page"],
        media: {
            thumbnail: require("../images/dasboard.jpg"),
        },
        details: [
          "This project can manage your Data and trasform it into charts and graphs",
        ]
    },
    {
      id: 12,
      name: "Nike Store",
      tags: [ "product"],
      media: {
          thumbnail: require("../images/shoes.webp"),
      },
      details: [
        "This is a Shoes store for Nike Brand",
      ]
  },
  {
    id: 10,
    name: "Business Site",
    tags: [ "product"],
    media: {
        thumbnail: require("../images/business.jpg"),
    },
    details: [
      "A simple structure of a static business website",
    ]
},
{
  id: 11,
  name: "E-Commerce",
  tags: [ "mobile-app"],
  media: {
      thumbnail: require("../images/shop.jpg"),
  },
  details: [
    "Welcome to the store where you can buy products of your choise",
  ]
},
]




const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
  
    const filterProjects = (tag) => {
      setTransition("zoomout");
  
      setTimeout(() => {
        if (tag !== "all") {
          const filteredProjects = projectsData.filter((f) => f.tags.includes(tag));
          setProjects(filteredProjects);
        } else {
          setProjects(projectsData);
        }
        setTransition("zoomin");
      }, 200);
  
      setTimeout(() => {
        setTransition(false);
      }, 600);
    };
  
    return (
      <Section id="portfolio" title="Check our Portfolio" background="light">
        <div className="portfolio-content-wrapper">
          <Filters filterProjects={(tag) => filterProjects(tag)} />
          <Showcase
            data={projects}
            transition={transition}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
          />
        </div>
      </Section>
    );
  };
  
  export default Portfolio;



