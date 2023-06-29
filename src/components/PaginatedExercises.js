import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

import ExerciseCard from "./ExerciseCard";

export default function PaginatedExercises({ exercises }) {

  const exercisesPerPage = 4;

  const paginatedExercises = [];
  for (let i = 0; i < exercises.length; i += exercisesPerPage) {
    const pageExercises = exercises.slice(i, i + exercisesPerPage);
    paginatedExercises.push(pageExercises);
  }

  const pages = paginatedExercises.map((pageExercises, index) => ({
    number: index + 1,
    exercises: pageExercises
  }));

  function getPage(number) {
    return pages.find(page => page.number === number);
  }

  const [currentPage, setCurrentPage] = useState(getPage(1));

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
  }, [currentPage]);

  function handlePageChange(pageNumber) {
    setCurrentPage(getPage(pageNumber));
  }

  const paginationTheme = createTheme({
    typography: {
      fontFamily: [
        "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", 
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
        "Helvetica Neue", "sans-serif"].join(","),
    }
  });

  return(
    <>
      <Row xs={1} sm={2} className="g-4">
        {currentPage.exercises.map((exercise) => (
        <Col key={exercise.id}>
          <ExerciseCard
            exercise={exercise}
            img={{src: exercise.coverImg, alt: ""}}
          />
        </Col>
        ))}
      </Row>
      <Row className="my-4">
        <ThemeProvider theme={paginationTheme}>
          <Pagination 
            className="d-flex justify-content-center"
            color="primary"
            count={pages.length}
            onChange={(event, page) => handlePageChange(page)}
            page={currentPage.number}
            size="large"
          />
        </ThemeProvider>
      </Row>
    </>
  );
}