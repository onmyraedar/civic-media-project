import { useEffect } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function GetInvolvedPage() {

  useEffect(() => {
    document.title = "Get Involved | Civic Media Project";
  });

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={12} className="p-4">
          <h4>Get Involved</h4>
          <p>There's nothing here yet. Please check back later!</p>
        </Col>
      </Row>
    </Container>
  );
}