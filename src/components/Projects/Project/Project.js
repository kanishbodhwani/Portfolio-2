import React, { useEffect, useRef } from 'react';
import "./Project.css";

const Project = ({ img, project, background , url}) => {
  const projectRef = useRef(null);
  const headingRef = useRef(null);


  useEffect(() => {
    const projectEl = projectRef.current;
    const headingEl = headingRef.current;

    projectEl.style.background = background;
    headingEl.style.backgroundImage = background;
  }, []);

  const handleClick = (url) => {
    window.location = url
  }

  return (
    <div className='project' ref={projectRef}>
      <h1 ref={headingRef}> {project} </h1>
      <div onClick={() => handleClick(url)}>
       <img src={img} alt="" /> 
      </div>
    </div>
  )
};

export default Project;