import '../styles/core/Var.scss';
import "../styles/layout/Projects.scss";
import '../styles/layout/ProjectsCard.scss';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProjectsCard = ({ img, title, desc, link, repo, footer }) => {
  const footerTools =
    footer.map((eachTool, i) => (
        <Button key={i} size='sm' variant='custom-footer'>
          {eachTool}
        </Button>
      ))
  
  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body style={{minHeight:'247px'}}>
        <Card.Title style={{ fontFamily: 'IBM Plex Mono', fontWeight: '700', fontSize: '1.8rem', color: '#d9610b', minHeight:'44px' }}>
          {title}
        </Card.Title>
        <Card.Text style={{ fontFamily: 'IBM Plex Mono', fontSize: '1.3rem', lineHeight:'1.3', color: '#2e2857', minHeight:'85px' }}>
          {desc}
        </Card.Text>
        <Button href={link} target='_blank' variant='custom'>
          Link
        </Button>
        <Button href={repo} target='_blank' variant='custom'>
          Repo
        </Button>
        <Card.Footer style={{height:'100%'}}>
          {footerTools}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
