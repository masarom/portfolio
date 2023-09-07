import '../styles/layout/Projects.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectsCard = () => {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
