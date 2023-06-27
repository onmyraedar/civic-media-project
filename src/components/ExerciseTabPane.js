import { useEffect, useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Overlay from "react-bootstrap/Overlay";
import Tab from "react-bootstrap/Tab";
import Tooltip from "react-bootstrap/Tooltip";

import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import remarkGfm from "remark-gfm";

import { Clipboard } from "react-bootstrap-icons";

import "./ExerciseTabPane.css";

export default function ExerciseTabPane({ item }) {

  const [showCopied, setShowCopied] = useState(false);

  const exerciseTextRef = useRef(null);
  const overlayTargetRef = useRef(null);

  useEffect(() => {

    if (!showCopied) {
      return;
    }

    function onTimeout() {
      setShowCopied(false);
    }

    // Hide the "Copied!" tooltip after 600 ms
    const timeoutId = setTimeout(onTimeout, 600);  

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showCopied]);

  async function handleCopyToClipboard() {

    try {
      // Removes <img> tags from HTML before copying to clipboard
      const htmlWithoutImgs = exerciseTextRef.current.innerHTML.replace(/<img[^>]*>/g, "");

      const clipboardItem = [new ClipboardItem({
        "text/plain": new Blob(
          [exerciseTextRef.current.innerText],
          { type: "text/plain" }
        ),
        "text/html": new Blob(
          [htmlWithoutImgs],
          { type: "text/html" }
        ),
      })];
    
      await navigator.clipboard.write(clipboardItem);

      // Toggle the "Copied! tooltip"
      setShowCopied(true);

    } catch (err) {
      console.error(err.name, err.message);
    }
  }

  return(
    <Tab.Pane eventKey={`${item.id}`}>
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
      <div ref={exerciseTextRef}>
        <ReactMarkdown 
          children={item.text}
          components={{
            img: ({node, ...props}) => <Image fluid {...props} />
          }}
          linkTarget="_blank"
          remarkPlugins={[remarkGfm]} 
        />
      </div>
      {item.enableCopy &&
      <>
        <Button
          ref={overlayTargetRef}
          onClick={handleCopyToClipboard}
          variant="outline-secondary"
          aria-label="Copy"
        >
          <Clipboard /><span className="ms-2">Copy</span>
        </Button>
        <Overlay 
          target={overlayTargetRef.current}
          show={showCopied}
          placement="right"
        >
          {(props) => (
            <Tooltip {...props}>Copied!</Tooltip>
          )}
        </Overlay>
      </>}
    </Tab.Pane>
  );
}