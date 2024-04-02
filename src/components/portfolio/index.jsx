import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";



const projectsData = [
    /*{
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
    },*/
   {
        id: 14,
        name: "Promptopia",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../images/socialmedia.webp"),
        },
        details: [
          "This is a Social Media Application to connect with your friends.",
          "",
        ]
    },
    {
      id: 18,
      name: "Hotel Booking",
      tags: ["mobile-app"],
      media: {
          thumbnail: require("../images/food.png"),
      },
      details: [
        "This is a Food ordering Application",
        "",
      ]
  },
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
    /*{
        id: 4,
        name: "Fitness Tracker",
        tags: ["web-app",],
        media: {
            thumbnail: require("../images/fitness.jpg"),
        },
        details: [
          "This is a Fitness Tracker Webapplication where you can track your Progress!!.",
        ]
    },*/
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
        id: 17,
        name: "Snake Game",
        tags: ["product"],
        media: {
            thumbnail: require("../images/snake.png"),
        },
        details: [
          "Complete the game build on Vanilla javascript",
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
    id: 16,
    name: "Spotify",
    tags: [ "product"],
    media: {
        thumbnail: require("../images/spotify.jpg"),
    },
    details: [
      "Stream your Favourite music here on this platform",
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
    const [projects, setProjects] = useState(projectsData.slice(0,8));
    const [transition, setTransition] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
  
    const filterProjects = (tag) => {
      setTransition("zoomout");
  
      setTimeout(() => {
        if (tag !== "all") {
          const filteredProjects = projectsData.filter((f) => f.tags.includes(tag));
          setProjects(filteredProjects);
        } else {
          setProjects(projectsData.slice(0,8));
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



