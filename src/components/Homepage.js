import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ExerciseCard from "./ExerciseCard";
import PlaceholderImg from "../assets/placeholder.png";

import "./Homepage.css";

export default function Homepage() {

  const cards = [
    {
      index: "1",
      title: "Motion Capture",
      description: "Black expression through motion capture with creative technologist LaJune MacMillian.",
      img: {src: PlaceholderImg, alt: ""},
      credit: "LaJune MacMillan"
    },
    {
      index: "2",
      title: "Facial Recognition",
      description: "Marginalization of POC in facial recognition with Gender Shades project at MIT Media Lab.",
      img: {src: PlaceholderImg, alt: ""},
      credit: "Joy Buolamwini"
    }
  ];

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={8} className="p-4">
          <h3>Exercises</h3>
          <p>One-hour exercises connecting technology with race and equity.</p>
          <Row xs={1} sm={2} className="g-4">
            {cards.map((card) => (
            <Col key={card.index}>
              <ExerciseCard
                title={card.title}
                description={card.description}
                img={card.img}
                credit={card.credit}
              />
            </Col>
          ))}
          </Row>
        </Col>
        <Col lg={4} className="d-flex flex-column p-4 light-gray-bckgd">
          <h3>Teacher Resources</h3>
        </Col>
      </Row>
    </Container>
  );
}