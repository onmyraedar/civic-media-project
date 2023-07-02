import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ExerciseCard from "./ExerciseCard";

import data from "../data/civicPrototype.json";

/**
 * Returns an array of exercises that match the user's search query. 
 * If the user has not entered a query, returns an array of all exercises.
 */
export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  let exercises;
  if (query) {
    exercises = data.exercises.filter((exercise) => {
      const title = exercise.title.toLowerCase();
      const tags = exercise.tags;
      if (title.includes(query.toLowerCase()) || tags.includes(query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    exercises = data.exercises;
  }
  return { exercises };
}

export default function SearchResults() {

  const { exercises } = useLoaderData();
  const [ searchParams ] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    document.title = `Search: "${query}" | Civic Media Project`;
  });

  const numResults = exercises.length;

  return(
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col lg={12} className="exercise-col p-4">
          <h4>{query ? `Search results for “${query}”` : "Search"}</h4>
          <p>{numResults === 1 
            ? `${numResults} result found` 
            : `${numResults} results found`}
          </p>
          <Row xs={1} sm={3} className="g-4">
            {exercises.map((exercise) => (
            <Col key={exercise.id}>
              <ExerciseCard
                exercise={exercise}
                img={{src: exercise.coverImg, alt: ""}}
              />
            </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}