import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ExerciseCard from "./ExerciseCard";
import TeacherResourceCard from "./TeacherResourceCard";

import data from "../data/civicPrototype.json";
import placeholderImg from "../assets/placeholder.png";

import "./Homepage.css";

export default function Homepage() {

  const exercises = data.exercises;
  const teacherResources = data.teacherResources;

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={8} className="p-4">
          <h4>Exercises</h4>
          <p>One-hour exercises connecting technology with race and equity.</p>
          <Row xs={1} sm={2} className="g-4">
            {exercises.map((exercise) => (
            <Col key={exercise.id}>
              <ExerciseCard
                title={exercise.title}
                description={exercise.shortDesc}
                img={{src: exercise.coverImg, alt: ""}}
                credit={exercise.credit}
              />
            </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4} className="teacher-resource-col d-flex flex-column p-4 light-gray-bckgd">
          <h4 className="mb-4">Teacher Resources</h4>
            {teacherResources.map((resource) => (
              <TeacherResourceCard
                key={resource.id}
                resource={resource}
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