import '../styles/core/Var.scss';
import "../styles/layout/Projects.scss";
import '../styles/layout/ProjectsCard.scss';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProjectsCard = ({ img, title, link, repo, footer }) => {
  return (
    <Card style={{ width: '26rem', margin: '5px auto' }}>
      <Card.Img variant='top' src={img} style={{ maxWidth: '100%', height: 'auto' }} />
      <Card.Body>
        <Card.Title style={{ fontFamily: 'IBM Plex Mono', fontWeight: '700', fontSize: '1.8rem', color: '#d9610b' }}>
          {title}
        </Card.Title>
        <Card.Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1.3rem', color: '#2e2857' }}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button href={link} target='_blank' variant='custom'>
          Link
        </Button>
        <Button href={repo} target='_blank' variant='custom'>
          Repo
        </Button>
        <Card.Footer>
          <Button size='sm' variant='custom-footer'>
            {footer}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
