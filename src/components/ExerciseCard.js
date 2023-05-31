import Card from "react-bootstrap/Card";

export default function ExerciseCard({ title, description, img, credit }) {
  return(
    <Card className="h-100">
      <Card.Img variant="top" src={img.src} alt={img.alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <small className="text-body-secondary">
            Credit: {credit}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}