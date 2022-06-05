import React, { useEffect, useRef, useState } from 'react';
import Project from "./Project/Project";
import { BsFillArrowRightSquareFill , BsFillArrowLeftSquareFill} from "react-icons/bs";
import Instagram from "../../images/Instagram.png";
import Campgrounds from "../../images/campground.png";
import Dashboard from "../../images/Dashboard-dark.png";
import Devchat from  "../../images/DevChat.png";
import Twitch from "../../images/twitch.png"
import Github from "../../images/Github-profile.png"
import Portfolio from "../../images/Portfolio.png";
import "./Projects.css";

const data = [
  {
    id: "0",
    project: "Instagram",
    img: Instagram,
    background: "linear-gradient(45deg, #405de6 ,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
    url: "https://instagram-3bdd0.web.app/login"
  }, 
  {
    id: "1",
    project: "Campgrounds",
    img: Campgrounds,
    background: "linear-gradient(to left, #ffffff ,#ffffff)",
    url: "https://github.com/kanishbodhwani/Campgrounds"
  }, 
  {
    id: "2",
    project: "Dashboard",
    img: Dashboard,
    background: "linear-gradient(to left, #eee ,#eee)",
    url: "https://delightful-strudel-bccd8d.netlify.app/"
  },
  {
    id: "3",
    project: "Dev Chat",
    img: Devchat,
    background: "linear-gradient(to left, #8E2DE2 ,#4A00E0)",
    url: "https://slack-clone-49a96.web.app/register"
  },
  {
    id: "4",
    project: "Twitch",
    img: Twitch,
    background: "linear-gradient(to left, #232526 ,#414345)",
    url: "https://github.com/kanishbodhwani/My-Twitch"
  },
  {
    id: "5",
    project: "Github-Profile",
    img: Github,
    background: "linear-gradient(to left, #ffffff , #ffffff)",
    url: "https://github.com/kanishbodhwani/Github-profile-repo"
  },
  {
    id: "6",
    project: "Portfolio",
    img: Portfolio,
    background: "linear-gradient(to left, #232526 ,#414345)",
    url: "https://kanishbodhwani.netlify.com/"
  }
];



export default function Projects() {
  const projectRef = useRef(null);

  const changeProject = (val) => {
    const projectEl = projectRef.current;
    if(val === "prev") {
      projectEl.scrollLeft -= 1440;
    } else {
      projectEl.scrollLeft += 1440;
    }
  }

  return (  
    <div className='projects'>
        <div ref={projectRef} className='projects-project'>
          {data.map((project) => {
            return <Project url={project.url} key={project.id} id={project.id} project={project.project} img={project.img} background={project.background} />
          })}
        </div>
      <BsFillArrowLeftSquareFill onClick={() => changeProject("prev")} className="arrow-left" size={"2rem"}/>
      <BsFillArrowRightSquareFill onClick={() => changeProject("next")}  className="arrow-right" size={"2rem"} />
    </div>
  )
};

