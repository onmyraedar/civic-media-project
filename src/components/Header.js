import { useState } from "react";
import { useSubmit } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Offcanvas from "react-bootstrap/Offcanvas";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

import { HouseDoorFill, Search } from "react-bootstrap-icons";

import ExerciseDropdownContent from "./ExerciseDropdownContent";

import { 
  compareSearchOptions,
  getSearchOptionLabel,
  groupSearchOption,
  renderSearchOption
} from "../search-utils";
import data from "../data/civicPrototype.json";
import Logo from "../assets/logo.svg";
import "./Header.css";

export default function Header() {

  const [showSearchModal, setShowSearchModal] = useState(false);
  const submit = useSubmit();

  const exercises = data.exercises;
  
  const tags = exercises
    .reduce((accumulator, exercises) => {
      return accumulator.concat(exercises.tags);
      }, []);

  const uniqueTags = [...new Set(tags)];

  const searchOptions = uniqueTags.concat(exercises);

  const filter = createFilterOptions();

  function handleSubmitSearch(event, value, reason) {

    let formData = new FormData();

    if (reason !== "clear") {
      // If the selected option is a query string
      if (typeof value === "string") {
        formData.append("query", value);
      // If the selection option is an exercise
      } else if (value && value.title) {
        formData.append("exerciseId", value.id);
      }
      submit(formData, { method: "post" });
      setShowSearchModal(false);
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: [
        "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", 
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
        "Helvetica Neue", "sans-serif"].join(","),
    }
  });

  const lightTheme = createTheme({
    typography: {
      fontFamily: [
        "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", 
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
        "Helvetica Neue", "sans-serif"].join(","),
    }
  });

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
              <Dropdown as={NavItem} id="exercise-dropdown" className="align-self-lg-center ms-lg-1 me-lg-3 py-2 py-lg-0">
                <Dropdown.Toggle variant="dark">Exercises</Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  <ExerciseDropdownContent />
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <div 
              role="search"
              className="d-none d-lg-block align-self-lg-center mt-4 mt-lg-0"
            >
              <ThemeProvider theme={darkTheme}>
              <Autocomplete
                id="navbar-search-autocomplete"
                autoHighlight
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  const { inputValue } = params;

                  // Add user input to autocomplete
                  const optionExists = options.some(
                    (option) => inputValue === option);
                  if (inputValue !== "" && !optionExists) {
                    filtered.push(`${inputValue}`);
                  }
          
                  return filtered.sort(compareSearchOptions);
                }}
                freeSolo
                getOptionLabel={(option) => getSearchOptionLabel(option)}
                groupBy={(option) => groupSearchOption(option)}
                onChange={handleSubmitSearch}
                options={searchOptions}
                size="small"
                sx={{ width: 300 }}
                renderInput={(params) => 
                  <TextField {...params} 
                    label="Search"
                    variant="filled"
                    name="query"
                  />}
                renderOption={(props, option) => renderSearchOption(props, option, filter)}
              />
              </ThemeProvider>
            </div>
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
          onClick={() => setShowSearchModal(true)}
          className="d-lg-none"
          variant="dark"
          aria-label="Search"
        >
          <Search color="white" size={24}/>
        </Button>
        <Modal
          show={showSearchModal}
          onHide={() => setShowSearchModal(false)}
          animation={false}
          fullscreen="lg-down"
        >
          <Modal.Header className="d-flex justify-content-space-between">
            <Modal.Title>Search for content</Modal.Title>
            <Button
                onClick={() => setShowSearchModal(false)}
                size="md"
                variant="secondary"
                aria-label="Close modal"
              >
                Close
            </Button>
          </Modal.Header>
          <Modal.Body className="d-flex">
            <div 
              role="search"
              className="flex-grow-1 me-4"
            >
              <ThemeProvider theme={lightTheme}>
              <Autocomplete
                id="modal-search-autocomplete"
                autoHighlight
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  const { inputValue } = params;

                  // Add user input to autocomplete
                  const optionExists = options.some(
                    (option) => inputValue === option);
                  if (inputValue !== "" && !optionExists) {
                    filtered.push(`${inputValue}`);
                  }

                  return filtered.sort(compareSearchOptions);
                }}                
                freeSolo
                getOptionLabel={(option) => getSearchOptionLabel(option)}
                groupBy={(option) => groupSearchOption(option)}
                ListboxProps={
                  {
                    style:{
                        maxHeight: "75vh",
                    }
                  }
                }
                onChange={handleSubmitSearch}
                open
                options={searchOptions.sort(compareSearchOptions)}
                size="small"
                PaperComponent={(props) => <Paper elevation={0} {...props} />}
                renderInput={(params) => 
                  <TextField {...params} 
                    autoFocus
                    label="Search"
                    variant="standard"
                    name="query"
                  />}
                renderOption={(props, option) => renderSearchOption(props, option)}
              />
              </ThemeProvider>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}