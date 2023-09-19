import '../styles/layout/Projects.scss';
import Carousel from 'react-bootstrap/Carousel';
import ProjectsCard from './ProjectsCard';
import ImgPers1 from '../images/projects/cooking-recipes.png';

const ProjectsPersonal = () => {
  return (
    <section id='personal'>
      <h2 className='projects__title'>Personal Projects</h2>
      <div className='projects__carousel'>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgPers1}
              title='"Otro Poquito": Cooking recipes'
              desc='Personal project that includes the recipes that my mother learned from her mother, and her mother from her mother, and so on 💜'
              link='https://masarom.github.io/cooking-recipes/'
              repo='https://github.com/masarom/cooking-recipes'
              footer={['React', 'In Progress']}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <h2 className='projects__more'>More soon!</h2>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsPersonal;
