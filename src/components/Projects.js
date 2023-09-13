import "../styles/layout/Projects.scss";
import ProjectsSoloAdalab from "./ProjectsSoloAdalab";
import ProjectsTeamAdalab from './ProjectsTeamAdalab';
import ProjectsPersonal from "./ProjectsPersonal";

const Projects = () => {
  return (
    <section className='projects'>
      <ProjectsSoloAdalab />
      <ProjectsTeamAdalab />
      <ProjectsPersonal />
    </section>
  );
};

export default Projects;
