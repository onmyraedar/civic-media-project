import { useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import ExerciseTabPane from "./ExerciseTabPane";

import { LayoutTextSidebarReverse, PersonVideo, PlayBtn } from "react-bootstrap-icons";

import data from "../data/civicPrototype.json";
import "./ExercisePage.css";

export default function ExercisePage() {

  const { exerciseId } = useParams();
  const [activeTabKey, setActiveTabKey] = useState("#learn1");
  const [mode, setMode] = useState("learn");

  const exercises = data.exercises;

  // Each exercise should have a unique ID
  const exercise = exercises.find(exercise => exercise.id === exerciseId)

  let activeContent = exercise.learnContent;
  if (mode === "learn") {
    activeContent = exercise.learnContent;
  } else {
    activeContent = exercise.teachContent;
  }

  function getIcon(item) {
    if (item.type === "video") {
      return <PlayBtn />
    } else if (item.type === "contact") {
      return <PersonVideo />
    } else {
      return <LayoutTextSidebarReverse />
    }
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
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Tab.Container 
        id="exercise-content-tabs"
        activeKey={activeTabKey}
        onSelect={(k) => setActiveTabKey(k)}
      >
        <Row className="flex-grow-1">
          <Col md={4} className="d-flex flex-column p-4 light-gray-bckgd">
            <Card className="sidebar">
              <Card.Header className="sidebar-header">{ exercise.title }</Card.Header>
              <ListGroup variant="flush">
                {activeContent.map((item) => (
                  <ListGroup.Item action href={`#${item.id}`} key={`#${item.id}`}>
                    {getIcon(item)}
                    <div className="sidebar-label-container">
                      <div className="sidebar-menu-label">{item.menuLabel}</div>
                      {item.subLabel}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
            <div className="d-flex px-3">
              <button 
                className={`learn-btn flex-grow-1 py-2 small ${mode === "learn" && "btn-active"} `}
                onClick={handleClickLearn}
              >
                LEARN
              </button>
              <button 
                className={`teach-btn flex-grow-1 py-2 small ${mode === "teach" && "btn-active"}`} 
                onClick={handleClickTeach}
              >
                TEACH
              </button>
            </div>
          </Col>
          <Col md={8} className="p-4">
            <Tab.Content>
              {activeContent.map((item) => (
                <ExerciseTabPane item={item}/>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}