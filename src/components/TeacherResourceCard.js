import Card from "react-bootstrap/Card";

import "./TeacherResourceCard.css";

export default function TeacherResourceCard({ title, description, time }) {
  return(
    <Card className="teacher-resource-card mb-4 p-2" bg="dark" text="white">
      <Card.Body>
        <Card.Title className="teacher-resource-card-title mb-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <small className="text-body-secondary">
            {time}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}