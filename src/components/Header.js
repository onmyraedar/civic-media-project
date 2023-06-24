import { useState } from "react";
import { Form as RouterForm } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Offcanvas from "react-bootstrap/Offcanvas";

import { HouseDoorFill, Search } from "react-bootstrap-icons";

import Logo from "../assets/logo.svg";

export default function Header() {

  const [showSearch, setShowSearch] = useState(false);

  const exercises = [
    {
      id: "1",
      title: "Motion Capture",
    },
    {
      id: "2",
      title: "Facial Recognition",
    }
  ];

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle className="me-3" aria-controls="offcanvas-expand-lg"></Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvas-expand-lg"
          className="text-bg-dark"
          placement="start"
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
              <Nav.Link href="/">
                <Button variant="dark">
                  <HouseDoorFill className="d-none d-lg-block" color="white" size={24}/>
                  <span className="d-lg-none">Home</span>
                </Button>
              </Nav.Link>
              <Nav.Link href="/get-involved" className="d-lg-none">
                <Button as="span" variant="dark">
                  Get Involved
                </Button>
              </Nav.Link>
              <Dropdown as={NavItem} className="align-self-lg-center ms-lg-1 me-lg-3 py-2 py-lg-0">
                <Dropdown.Toggle variant="dark">Exercises</Dropdown.Toggle>
                <Dropdown.Menu>
                  {exercises.map((exercise) => (
                  <Dropdown.Item 
                    key={exercise.id}
                    href={`/exercises/${exercise.id}`}>
                    {exercise.title}
                  </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <RouterForm 
              method="post" 
              className="d-none d-lg-block align-self-lg-center mt-4 mt-lg-0"
            >
              <InputGroup>
                <Form.Control
                  id="navbar-search-bar"
                  type="search"
                  placeholder="Search"
                  aria-describedby="navbar-search-bar-label"
                  aria-label="Search"
                  name="query"
                />
                <Button type="submit" variant="light" id="navbar-search-bar-label">
                  <Search color="#6F6F6F"/>
                </Button>
              </InputGroup>
            </RouterForm>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="d-none d-lg-block ms-auto me-lg-3">
          <Nav.Link href="/get-involved">
            <Button as="span" variant="dark">
              Get Involved
            </Button>
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="me-auto me-lg-3">
          <img
            className=""
            alt="Civic Media Project Logo"
            src={Logo}
            width="72"
            height="50"
          />
        </Navbar.Brand>
        <Button 
          onClick={() => setShowSearch(true)}
          className="d-lg-none"
          variant="dark"
          aria-label="Search"
        >
          <Search color="white" size={24}/>
        </Button>
        <Modal
          show={showSearch}
          onHide={() => setShowSearch(false)}
          animation={false}
          fullscreen="lg-down"
        >
          <Modal.Header className="d-flex">
            <RouterForm 
              method="post"
              onSubmit={() => setShowSearch(false)}
              className="flex-grow-1 me-4"
            >
              <Form.Control
                id="modal-search-bar"
                type="search"
                placeholder="Search..."
                autoFocus
                aria-label="Search"
                name="query"
              />
            </RouterForm>
            <Button
              onClick={() => setShowSearch(false)}
              variant="primary"
              aria-label="Cancel"
            >
              Cancel
            </Button>
          </Modal.Header>
          <Modal.Body>
            Press your keyboard's Enter button to search.
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}