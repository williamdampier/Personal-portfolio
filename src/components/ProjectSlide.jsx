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
       <ul className="project-links">
           <li>
                 <a href={github} target="_blank">Github <img src="/icons/github.png" alt="github icon"></img></a>
            </li>
             <li>
                <a href={weblink} target="_blank">Weblink <img src="/icons/online.png" alt="weblink icon"></img></a>
           </li>
        </ul> 
      </div>
    )
  }

  export default ProjectSlide;
  