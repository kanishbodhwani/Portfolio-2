import React from 'react'
import MyPic from "../../images/pic2.png";
import "./About.css";


export default function About() {
  return (
    <div className='about'>
        <div className='about-about'>
            <h1> About </h1>
            <div className='about-card'>
                <img src={MyPic} alt="" />
            </div>
        </div>
        <div className='about-para'>
            I am an enthusiastic <span>full stack web developer </span>  
            who is always curious about projects
            that can solve <span> real world problems </span>. 
            With my ideas, I like creating beautiful products 
            with the greatest UI/UX design. Also a Backend 
            developer with robust <span> problem-solving abilities </span> and 
            shown expertise in developing and designing 
            the best that has ever been developed.   
        </div>
    </div>
  )
};