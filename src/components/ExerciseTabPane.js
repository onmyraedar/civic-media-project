import Tab from "react-bootstrap/Tab";

import ReactPlayer from "react-player";

import "./ExerciseTabPane.css";

export default function ExerciseTabPane({ item }) {
  return(
    <Tab.Pane eventKey={`#${item.id}`}>
      <h4>Exercise content goes here...</h4>
      <h6>{item.menuLabel}</h6>
      {item.type === "video" &&
        <div className="player-container">
          <ReactPlayer 
            className="react-player"
            controls 
            url={item.mediaLink}
            width="100%"
            height="100%"
          />
        </div>
      }
    </Tab.Pane>
  );
}