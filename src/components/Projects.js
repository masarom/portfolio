import "../styles/layout/Projects.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCard from "./ProjectsCard";
import ImgInd1 from "../images/projects/rick-morty-react.png";
import ImgInd2 from "../images/projects/friends-database-react.png";
import ImgInd3 from "../images/projects/disney-database-javascript.png";
import ImgInd4 from "../images/projects/dice-bet-javascript.png";
import ImgInd5 from "../images/projects/layout-gulp.png";

const Projects = () => {
  return (
    <>
      <Container>
        <h2>Adalab Projects</h2>
        <h3>Individual Projects</h3>
        <Row className="individual__projects">
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard img={ImgInd1} title="Rick & Morty Database" footer="React"/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard img={ImgInd2} title="Friends Sentence Database" footer="React"/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard
              img={ImgInd3}
              title="Disney Characters Database" footer="JavaScript"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard img={ImgInd4} title="Dice and Bet Game" footer="JavaScript"/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectsCard img={ImgInd5} title="Layout Project" footer="Gulp"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
