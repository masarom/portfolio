import '../styles/layout/Projects.scss';
import Carousel from 'react-bootstrap/Carousel';
import ProjectsCard from './ProjectsCard';
import ImgInd1 from '../images/projects/rick-morty-react-2.png';
import ImgInd2 from '../images/projects/friends-database-react.png';
import ImgInd3 from '../images/projects/disney-database-javascript.png';
import ImgInd4 from '../images/projects/dice-bet-javascript.png';
import ImgInd5 from '../images/projects/layout-gulp.png';

const ProjectsAdalab = () => {
  return (
    <section id='solo'>
      <h2 className='projects__title'>Adalab Bootcamp Solo Projects</h2>
      <div className='projects__carousel'>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgInd1}
              title='Rick & Morty Database'
              desc="Web app using Rick & Morty characters' API developed with React"
              link='https://masarom.github.io/rick-morty-database-react/'
              repo='https://github.com/masarom/rick-morty-database-react'
              footer={['React', 'API Rest']}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgInd2}
              title='Friends Sentence Database'
              desc="Web app using Friends sentences' API developed with React"
              link='https://masarom.github.io/friends-sentence-database-react/'
              repo='https://github.com/masarom/friends-sentence-database-react'
              footer={['React', 'API Rest']}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgInd3}
              title='Disney Characters Database'
              desc="Web developed using the Disney Characters' API with JavaScript"
              link='https://masarom.github.io/disney-database-javascript/'
              repo='https://github.com/masarom/disney-database-javascript'
              footer={['JavaScript']}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgInd4}
              title='Dice and Bet Game'
              desc='Game developed with JavaScript: player chooses a number from 1 to 6 which must match the random number chosen by the game'
              link='https://masarom.github.io/dice-bet-javascript/'
              repo='https://github.com/masarom/dice-bet-javascript'
              footer={['JavaScript']}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <ProjectsCard
              img={ImgInd5}
              title='Layout Project'
              desc='First layout challenge, building a page using Flexbox, Grid, Gulp, SASS, and other tools'
              link='https://masarom.github.io/layout-project-gulp/'
              repo='https://github.com/masarom/layout-project-gulp'
              footer={['Gulp', 'Sass']}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsAdalab;
