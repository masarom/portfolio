import "../styles/layout/Projects.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProjectsCard = ({ img, title, footer }) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src={img} className="card__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Link</Button>
        <Button variant="primary">Repo</Button>
        <Card.Footer className="text-muted">
          <Button>{footer}</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
