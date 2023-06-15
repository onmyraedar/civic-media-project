import Tab from "react-bootstrap/Tab";

import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import remarkGfm from "remark-gfm";

import "./ExerciseTabPane.css";

export default function ExerciseTabPane({ item }) {
  return(
    <Tab.Pane eventKey={`#${item.id}`}>
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
      <h2>{item.menuLabel}</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {item.text}
      </ReactMarkdown>
    </Tab.Pane>
  );
}