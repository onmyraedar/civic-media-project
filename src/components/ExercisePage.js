import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function ExercisePage() {

  const { exerciseId } = useParams();

  return (
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={3} className="d-flex flex-column p-4 light-gray-bckgd">
        </Col>        
        <Col lg={9} className="p-4">
          <h4>Exercise {exerciseId} content goes here...</h4>
        </Col>
      </Row>
    </Container>
  )
}