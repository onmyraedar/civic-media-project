import Card from "react-bootstrap/Card";

import "./ExerciseCard.css";

export default function ExerciseCard({ title, description, img, credit }) {
  return(
    <Card className="exercise-card h-100">
      <Card.Img variant="top" src={img.src} alt={img.alt} />
      <Card.Body>
        <Card.Title className="exercise-card-title mb-3 mt-1">{title}</Card.Title>
        <Card.Text className="light-gray-text">{description}</Card.Text>
        <Card.Text>
          <small className="light-gray-text text-body-secondary">
            Credit: {credit}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}