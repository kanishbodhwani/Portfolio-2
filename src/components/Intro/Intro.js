import React from 'react';
import "./Intro.css";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitter , BsGithub} from "react-icons/bs";

const Intro = () => {
  return (
    <div className='intro'>
      <div className='name'>
        <h1> Kanish Bodhwani </h1>
        {/* <h2> Full Stack Developer </h2> */}
      </div>
      <div className='profession'>
        <img src='https://blush.design/api/download?shareUri=WrfIhsaTAglUgqhE&c=Bottom_0%7E393f82_Hair_0%7E2c1b18_Skin_0%7Edcae92_Top_0%7Ef2f2f2&w=800&h=800&fm=png' alt=''/>
        <div className='profession-text'>
          <p> 
            "A self-taught 
            <span> full stack web developer </span> 
            with a lot of enthusiasm. 
            I conceive and then execute products like no one has
            ever seen before using my acquired power of imagination."          
          </p>
          <div className='socialsDiv'>
            <IoLogoLinkedin size={"1em"} color={"#fff"} className="icon" />
            <BsTwitter size={"0.9em"} color={"#fff"} className="icon" />
            <BsGithub size={"0.8em"} color={"#fff"} className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;