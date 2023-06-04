import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ExerciseCard from "./ExerciseCard";
import TeacherResourceCard from "./TeacherResourceCard";
import PlaceholderImg from "../assets/placeholder.png";

import "./Homepage.css";

export default function Homepage() {

  const exerciseCards = [
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

  const teacherResourceCards = [
    {
      index: "3",
      title: "How to talk about race",
      description: "Join a panel discussion on best practices in facilitating discussions around issues of race, class, and gender.",
      time: "15 minutes",
    },
    {
      index: "4",
      title: "Adapting exercises",
      description: "A case-study on how Civic Media Project exercises can be used by faculty.",
      time: "25 minutes",
    }
  ];

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={8} className="p-4">
          <h4>Exercises</h4>
          <p>One-hour exercises connecting technology with race and equity.</p>
          <Row xs={1} sm={2} className="g-4">
            {exerciseCards.map((card) => (
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
        <Col lg={4} className="teacher-resource-col d-flex flex-column p-4 light-gray-bckgd">
          <h4 className="mb-4">Teacher Resources</h4>
            {teacherResourceCards.map((card) => (
              <TeacherResourceCard
                key={card.index}
                title={card.title}
                description={card.description}
                time={card.time}
              />
            ))}
          <div className="divider mb-4"></div>
          <Button 
            as="a"
            href="https://twiceoverpodcast.com"
            className="podcast-btn py-2"
            variant="dark">
            VISIT THE TWICE OVER PODCAST
          </Button>
        </Col>
      </Row>
    </Container>
  );
}