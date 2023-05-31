import Card from "react-bootstrap/Card";

export default function TeacherResourceCard({ title, description, time }) {
  return(
    <Card className="mb-4" bg="dark" text="white">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
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