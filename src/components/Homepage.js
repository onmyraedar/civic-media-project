import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./Homepage.css";

export default function Homepage() {

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={8} className="p-4">
          <h3>Exercises</h3>
          <p>One-hour exercises connecting technology with race and equity.</p>
        </Col>
        <Col lg={4} className="d-flex flex-column p-4 light-gray-bckgd">
          <h3>Teacher Resources</h3>
        </Col>
      </Row>
    </Container>
  );
}