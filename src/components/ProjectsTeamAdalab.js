import '../styles/layout/Projects.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsCard from './ProjectsCard';
import ImgTeam4 from '../images/projects/layout-cleopatra.png';
import ImgTeam3 from '../images/projects/awesone-profile-cards.png';
import ImgTeam2 from '../images/projects/awesome-projects-react.png';
import ImgTeam1 from '../images/projects/townsville-projects.png'

const ProjectsTeamAdalab = () => {
  return (
    <Container id='team'>
      <h2 className='projects__title'>Adalab Bootcamp Team Projects</h2>
      <Row className='projects__team'>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard
            img={ImgTeam1}
            title='Townsville needs you!'
            desc='The successor of the Awesome Projects Database, containing the fornt-end AND back-end of the project, using the PowerPuff Girls theme'
            link='https://project-promo-t-module-4-team-4.onrender.com/'
            repo='https://github.com/masarom/rick-morty-database-react'
            footer={['React', 'NodeJS', 'Express']}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard
            img={ImgTeam2}
            title='Awesome Projects Database'
            desc="Tech projects' database web app that collects information from the user through a form, using React"
            link='https://masarom.github.io/awesome-projects-database-react/'
            repo='https://github.com/masarom/awesome-projects-database-react'
            footer={['React', 'API Rest']}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard
            img={ImgTeam3}
            title='Awesome Profile Cards'
            desc='Project about building a profile card creator using JavaScript'
            link='https://masarom.github.io/awesome-profile-cards-javascript/'
            repo='https://github.com/masarom/awesome-profile-cards-javascript'
            footer={['JavaScript']}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard
            img={ImgTeam4}
            title="Team Web - Cleopatra's Digital Empire"
            desc='Layout team challenge, building a team presentation page using Gulp'
            link='https://masarom.github.io/layout-teamwork-cleopatra-digital-empire/'
            repo='https://github.com/masarom/layout-teamwork-cleopatra-digital-empire'
            footer={['Gulp', 'Sass']}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsTeamAdalab;
