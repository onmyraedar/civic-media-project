import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";

import data from "../data/civicPrototype.json";
import "./ExerciseDropdownContent.css";

export default function ExerciseDropdownContent() {

  const categories = data.categories;
  const exercises = data.exercises;

  const dropdownCategories = categories
    // For each category, find its corresponding exercises 
    .map((category) => {
      const categoryExercises = exercises.filter(
        exercise => exercise.categoryIDs.includes(category.id));
      return {...category, exercises: categoryExercises};
      
    })
    // Categories with no exercises will not appear in the dropdown
    .filter(category => category.exercises.length > 0);

  return (
    <Row xs={1} lg={4} className="g-3">
      {dropdownCategories.map((category) => (
        <Col key={category.id}>
          <Dropdown.Header className="exercise-dropdown-header">
            {category.label}
          </Dropdown.Header>
          {category.exercises.map((exercise) => {
            return (
              <Dropdown.Item 
                key={exercise.id}
                className="exercise-dropdown-link"
                href={`/exercises/${exercise.id}`}
              >
                {exercise.title}
              </Dropdown.Item>
            );
          })}
        </Col>
        ))}
    </Row>
  );

}