import '../styles/layout/Projects.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsCard from './ProjectsCard';
import ImgPers1 from '../images/projects/cooking-recipes.png'

const ProjectsPersonal = () => {
  return (
    <Container id='personal'>
      <h2 className='projects__title'>Personal Projects</h2>
      <Row className='projects__personal'>
        <Col xs={12} md={6} lg={4}>
          <ProjectsCard
            img={ImgPers1}
            title='"Otro Poquito": Cooking recipes'
            desc='Personal project that includes the recipes that my mother learned from her mother, and her mother from her mother, and so on 💜'
            link='https://masarom.github.io/cooking-recipes/'
            repo='https://github.com/masarom/cooking-recipes'
            footer={['React', 'In Progress']}
          />
        </Col>
        <Col>
          <h2 className='projects__more'>More soon!</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPersonal;
