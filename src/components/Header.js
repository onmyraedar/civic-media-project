import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Offcanvas from "react-bootstrap/Offcanvas";

import { HouseDoorFill, Search } from "react-bootstrap-icons";

import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvas-expand-lg"></Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvas-expand-lg"
          className="text-bg-dark"
          placement="end"
          responsive="lg"
          aria-labelledby="offcanvas-label-expand-lg"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvas-label-expand-lg" className="ms-1">
              Civic Media Project
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="overflow-y-scroll">
            <Nav>
              <Nav.Link href="#home">
                <Button variant="dark">
                  <HouseDoorFill className="d-none d-lg-block" color="white" size={24}/>
                  <span className="d-lg-none">Home</span>
                </Button>
              </Nav.Link>
              <Dropdown as={NavItem} className="align-self-lg-center ms-lg-1 me-lg-3">
                <Dropdown.Toggle variant="dark">Exercises</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#motioncapture">Motion Capture</Dropdown.Item>
                  <Dropdown.Item href="#facialrec">Facial Recognition</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Form className="align-self-lg-center me-auto mt-4 mt-lg-0">
              <InputGroup>
                <Form.Control
                  id="navbar-search-bar"
                  type="search"
                  placeholder="Search"
                  aria-describedby="navbar-search-bar-label"
                  aria-label="Search"
                />
                <Button variant="light" id="navbar-search-bar-label">
                  <Search color="#6F6F6F"/>
                </Button>
              </InputGroup>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand>
          <img
            className=""
            alt="Civic Media Project Logo"
            src={Logo}
            width="72"
            height="50"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}