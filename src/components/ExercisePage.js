import { useState } from "react";
import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from 'react-bootstrap/Tab';

export default function ExercisePage() {

  const { exerciseId } = useParams();
  const [activeTabKey, setActiveTabKey] = useState("#learn1");
  const [mode, setMode] = useState("learn");

  const exercise = {
    "id": 1,
    "title": "Motion Capture",
    "categoryIDs":"1,2",
    "shortDesc": "",
    "longDesc": "",
    "coverImg": "",
    "credit": "",
    "tags": "motion capture, black, dance, race",
    "learnContent": [
      {
        "id": "learn1",
        "menuLabel": "Welcome",
        "subLabel":"10 minutes",
        "order": 1,
        "media": "",
        "text": "",
        "type":"video",
        "sourceType": "thirdparty",
        "credit": "",
        "sourceLink": ""
      },
      {
        "id": "learn2",
        "menuLabel": "Example",
        "subLabel":"20 minutes",
        "order": 2,
        "media": "",
        "text": "",
        "type":"video",
        "sourceType": "thirdparty",
        "credit": "",
        "sourceLink": ""
      },
      {
        "id": "learn3",
        "menuLabel": "Apply",
        "subLabel":"15 minutes",
        "order": 3,
        "media": "",
        "text": "",
        "type":"document",
        "sourceType": "thirdparty",
        "credit": "",
        "sourceLink": ""
      }
    ],
    "teachContent": [
      {
        "id": "teach1",
        "menuLabel": "Implementation Guide",
        "subLabel":"Syllabus language, links, readings",
        "order": 1,
        "media": "",
        "text": "",
        "type":"document",
        "enableCopy": true
      },
      {
        "id": "teach2",
        "menuLabel": "Examples",
        "subLabel":"15 minutes",
        "order": 2,
        "media": "",
        "text": "",
        "type":"document",
        "enableCopy": false
      },
      {
        "id": "teach3",
        "menuLabel": "Get Support",
        "subLabel":"",
        "order": 3,
        "media": "",
        "text": "",
        "type":"contact",
        "enableCopy": false
      }
    ]
  }

  function handleClickLearn() {
    setMode("learn");
    setActiveTabKey("#learn1");
  }

  function handleClickTeach() {
    setMode("teach");
    setActiveTabKey("#teach1");
  }

  return (
    <Tab.Container 
      className="flex-grow-1 d-flex flex-column"
      id="exercise-content-tabs"
      activeKey={activeTabKey}
      onSelect={(k) => setActiveTabKey(k)}
    >
      <Row className="flex-grow-1">
        <Col lg={4} className="d-flex flex-column p-4 light-gray-bckgd">
          <ListGroup>
            {mode === "learn" ? 
            exercise.learnContent.map((item) => (
              <ListGroup.Item action href={`#${item.id}`}>
                {item.menuLabel}
              </ListGroup.Item>
            ))
            : exercise.teachContent.map((item) => (
              <ListGroup.Item action href={`#${item.id}`}>
                {item.menuLabel}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <button onClick={handleClickLearn}>Learn</button>
          <button onClick={handleClickTeach}>Teach</button>
        </Col>
        <Col lg={8} className="p-4">
          <Tab.Content>
            {mode === "learn" ? 
            exercise.learnContent.map((item) => (
              <Tab.Pane eventKey={`#${item.id}`}>
                <h4>Exercise {exerciseId} content goes here...</h4>
                <h6>{item.menuLabel}</h6>
              </Tab.Pane>
            ))
            : exercise.teachContent.map((item) => (
              <Tab.Pane eventKey={`#${item.id}`}>
                <h4>Exercise {exerciseId} content goes here...</h4>
                <h6>{item.menuLabel}</h6>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}