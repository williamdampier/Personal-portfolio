import ProjectSlide from "./ProjectSlide"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import projects from '../library'





function ProjectsCarousel() {

  return ( 
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
        icons= {project.icons}
        github= {project.github}
        weblink= {project.weblink}
        />
       }) }
        </Carousel>
    )
  
}

export default ProjectsCarousel;