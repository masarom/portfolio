import './Projects.scss';
import Carousel from 'react-bootstrap/Carousel';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import projects from '../../data/projects.json';

const ProjectsPersonal = () => {
  const carouselPersonalProjects = () => {
    return projects.personal.map((eachProject) => (
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
    <section id='personal'>
      <h2 className='projects__title'>Personal Projects</h2>
      <div className='projects__carousel'>
        <Carousel fade>
          {carouselPersonalProjects()}
          <Carousel.Item interval={5000}>
            <h2 className='projects__more'>More soon!</h2>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsPersonal;
