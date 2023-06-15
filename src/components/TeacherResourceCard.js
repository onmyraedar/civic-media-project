import Card from "react-bootstrap/Card";

import "./TeacherResourceCard.css";

export default function TeacherResourceCard({ resource }) {
  return(
    <Card className="teacher-resource-card mb-4 p-2" bg="dark" text="white">
      <a 
        href={resource.refLink}
        target={resource.refLinkInNewWin ? "_blank" : "_self"}
      >
        <Card.Body>
          <Card.Title className="teacher-resource-card-title mb-3">{resource.title}</Card.Title>
          <Card.Text>{resource.shortDesc}</Card.Text>
          <Card.Text>
            <small className="text-body-secondary">
              {resource.lengthInMin} minutes
            </small>
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
}