import Container from "react-bootstrap/Container";

export default function ErrorPage() {
  return (
    <Container 
      className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">404</h1>
      <p className="text-center">Sorry, we couldn't find the content you requested.</p>
    </Container>
  );
}