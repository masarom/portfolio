import './Projects.scss';
import ProjectsNav from '../ProjectsNav/ProjectsNav';
import ProjectsSoloAdalab from './ProjectsSoloAdalab';
import ProjectsTeamAdalab from './ProjectsTeamAdalab';
import ProjectsPersonal from './ProjectsPersonal';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__link'>
        <p className='projects__link--title'>
          <span className='link__title--decoration'>{'# '}</span>Projects
        </p>
        <i className='fa-solid fa-chevron-down'></i>
      </div>
      <ProjectsNav />
      <ProjectsPersonal />
      <div className='container-flex'>
        <ProjectsSoloAdalab />
        <ProjectsTeamAdalab />
      </div>
    </section>
  );
};

export default Projects;
