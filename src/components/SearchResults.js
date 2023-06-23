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
      return title.includes(query.toLowerCase());
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
                id={exercise.id}
                title={exercise.title}
                description={exercise.shortDesc}
                img={{src: exercise.coverImg, alt: ""}}
                credit={exercise.credit}
              />
            </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}