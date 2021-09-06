import ProjectSlide from "./ProjectSlide"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import projects from '../library'


function ProjectsCarousel() {

  return ( 
    <div id="projects">
    <Carousel
    
    plugins={[
      'arrows',
      'infinite'
    ]}
    
    >
    {projects.map( (project) => {
      return <ProjectSlide 
        name={project.name}
        id={project.id}    
        description={project.description}
        icons= {project.icons}
        github= {project.github}
        weblink= {project.weblink}
        />
       }) }
        </Carousel>
        </div>
    )
  
}

export default ProjectsCarousel;