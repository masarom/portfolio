import './Projects.scss';
import Carousel from 'react-bootstrap/Carousel';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import projects from '../../data/projects.json';

const ProjectsAdalab = () => {
  const carouselSoloProjects = () => {
    return projects.solo.map((eachProject) => (
      <Carousel.Item interval={5000} key={eachProject.id}>
        <ProjectsCard
          key={eachProject.id}
          img={eachProject.img}
          title={eachProject.title}
          desc={eachProject.desc}
          link={eachProject.link}
          repo={eachProject.repo}
          footer={eachProject.footer}
        />
      </Carousel.Item>
    )); 
  };
  return (
    <section id='solo'>
      <h2 className='projects__title'>Adalab Bootcamp Solo Projects</h2>
      <div className='projects__carousel'>
        <Carousel fade>
          {carouselSoloProjects()}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsAdalab;
