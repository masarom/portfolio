import { HashLink as Link } from 'react-router-hash-link';
import './ProjectsNav.scss';

const ProjectsNav = () => {
  return (
    <section className='projects__nav'>
      <Link to='#personal'>
        <button className='projects__nav--btn'>Personal projects</button>
      </Link>
      <Link to='#solo'>
        <button className='projects__nav--btn'>Adalab | Solo Projects</button>
      </Link>
      <Link to='#team'>
        <button className='projects__nav--btn'>Adalab | Team Projects</button>
      </Link>
    </section>
  );
};
export default ProjectsNav;
