import '../styles/layout/Projects.scss';
import ProjectsSoloAdalab from './ProjectsSoloAdalab';
import ProjectsTeamAdalab from './ProjectsTeamAdalab';
import ProjectsPersonal from './ProjectsPersonal';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__link'>
        <p className='projects__link--title'>
          <span className='link__title--decoration'>{'# '}</span>Projects
        </p>
        <i className='fa-solid fa-chevron-down'></i>
      </div>
      <section className='projects__nav'>
        <Link to='#personal'><button className='projects__nav--btn'>Personal projects</button></Link>
        <Link to='#solo'><button className='projects__nav--btn'>Adalab | Solo Projects</button></Link>
        <Link to='#team'><button className='projects__nav--btn'>Adalab | Team Projects</button></Link>
      </section>
      <ProjectsPersonal />
      <div className="container-flex">
        <ProjectsSoloAdalab />
        <ProjectsTeamAdalab />
      </div>
    </section>
  );
};

export default Projects;
