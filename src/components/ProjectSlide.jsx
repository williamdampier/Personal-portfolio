import React, { useState } from "react";

function ProjectSlide({name, id, description, icons, github, weblink}) {
    const [iconList, setIcon] = useState(icons);
    
    return (
      <div  className="slide">
        <h2 >{name}</h2>
        <h4>{description}</h4>
        <hr />
        <img className="img-fluid" 
            src={"/img/"+ id + ".png"} 
            alt="logo"/> 

        <ul className="icon-bar">
        {iconList.map( (icon) => <li><img src={"/icons/" + icon + ".png"} alt={icon}></img></li>) }
                 
        </ul>
        <hr />
       <div className="project-links">
           <a href={github} target="_blank" rel="noreferrer"><img src="/icons/github.png" alt="github icon"></img></a>
           
           <a href={weblink} target="_blank" rel="noreferrer"><img src="/icons/online.png" alt="weblink icon"></img></a>
           
        </div> 
      </div>
    )
  }

  export default ProjectSlide;
  