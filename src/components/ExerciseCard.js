import { useState } from "react";

import Card from "react-bootstrap/Card";

import { getFirstContentId } from "../utils";
import placeholderImg from "../assets/placeholder.png";

import "./ExerciseCard.css";

export default function ExerciseCard({ exercise, img }) {

  const [pastImgError, setPastImgError] = useState(false);

  // Displays a fallback image in case of an error (e.g. an incorrect path)
  // Setting state prevents this function from executing again if the fallback image also throws an error
  function handleImageError(event) {
    if (!pastImgError) {
      event.target.src = placeholderImg;
      event.target.alt = "";
      setPastImgError(true);
    }
  }

  return(
    <a href={`/exercises/${exercise.id}/${getFirstContentId(exercise)}`}>
      <Card className="exercise-card h-100">
        <Card.Img variant="top" src={img.src} alt={img.alt} onError={handleImageError}/>
        <Card.Body>
          <Card.Title className="exercise-card-title mb-3 mt-1">{exercise.title}</Card.Title>
          <Card.Text className="light-gray-text">{exercise.shortDesc}</Card.Text>
          <Card.Text>
            <small className="light-gray-text text-body-secondary">
              {exercise.credit}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}