import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import ExerciseTabPane from "./ExerciseTabPane";

import { LayoutTextSidebarReverse, PersonVideo, PlayBtn } from "react-bootstrap-icons";

import data from "../data/civicPrototype.json";
import { getFirstContentId } from "../utils";
import "./ExercisePage.css";

export default function ExercisePage() {

  const navigate = useNavigate();
  const { exerciseId, contentId } = useParams();
  const [activeTabKey, setActiveTabKey] = useState(contentId);

  const exercises = data.exercises;

  // Each exercise should have a unique ID
  const exercise = exercises.find(exercise => exercise.id === exerciseId)

  useEffect(() => {
    document.title = `${exercise.title} | Civic Media Project`;
  }, [exercise.title]);

  function getMode() {
    let mode;
    const isInLearn = exercise.learnContent.find(content => content.id === contentId)
    const isInTeach = exercise.teachContent.find(content => content.id === contentId)
    if (isInLearn) {
      mode = "learn";
    } else if (isInTeach) {
      mode = "teach";
    }
    return mode;
  }

  const [mode, setMode] = useState(getMode);

  let activeContent = exercise.learnContent;
  if (mode === "learn") {
    activeContent = exercise.learnContent
      .sort((item1, item2) => item1.order - item2.order);
  } else {
    activeContent = exercise.teachContent
      .sort((item1, item2) => item1.order - item2.order);
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
    handleSwitchTab(getFirstContentId(exercise, "learn"));
  }

  function handleClickTeach() {
    setMode("teach");
    handleSwitchTab(getFirstContentId(exercise, "teach"));
  }

  const handleSwitchTab = (tabKey) => {
    const previousTabKey = contentId;
    if (previousTabKey !== tabKey) {
      navigate(`/exercises/${exerciseId}/${tabKey}`, { replace: true });
    }
    setActiveTabKey(tabKey);
  };

  return (
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Tab.Container 
        id="exercise-content-tabs"
        activeKey={activeTabKey}
        onSelect={(tab) => handleSwitchTab(tab)}
      >
        <Row className="flex-grow-1">
          <Col md={4} className="d-flex flex-column p-4 light-gray-bckgd">
            <Card className="sidebar">
              <Card.Header className="sidebar-header">{ exercise.title }</Card.Header>
              <ListGroup variant="flush">
                {activeContent.map((item) => (
                  <ListGroup.Item action eventKey={`${item.id}`} key={`${item.id}`}>
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
                <ExerciseTabPane key={`${item.id}`} item={item}/>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}