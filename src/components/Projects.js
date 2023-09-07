import '../styles/layout/Projects.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
