import "../styles/layout/Projects.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCard from "./ProjectsCard";
import ImgInd1 from "../images/projects/rick-morty-react-2.png";
import ImgInd2 from "../images/projects/friends-database-react.png";
import ImgInd3 from "../images/projects/disney-database-javascript.png";
import ImgInd4 from "../images/projects/dice-bet-javascript.png";
import ImgInd5 from "../images/projects/layout-gulp.png";

const Projects = () => {
  return (
    <section className='projects'>
      <Container>
        <h2 className='projects__title'>Adalab Bootcamp Solo Projects</h2>
        <Row className='projects__solo'>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd1}
              title='Rick & Morty Database'
              link='https://masarom.github.io/rick-morty-database-react/'
              repo='https://github.com/masarom/rick-morty-database-react'
              footer='React'
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd2}
              title='Friends Sentence Database'
              link='https://masarom.github.io/friends-sentence-database-react/'
              repo='https://github.com/masarom/friends-sentence-database-react'
              footer='React'
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd3}
              title='Disney Characters Database'
              link='https://masarom.github.io/disney-database-javascript/'
              repo='https://github.com/masarom/disney-database-javascript'
              footer='JavaScript'
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd4}
              title='Dice and Bet Game'
              link='https://masarom.github.io/dice-bet-javascript/'
              repo='https://github.com/masarom/dice-bet-javascript'
              footer='JavaScript'
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd5}
              title='Layout Project'
              link='https://masarom.github.io/layout-project-gulp/'
              repo='https://github.com/masarom/layout-project-gulp'
              footer='Gulp'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
