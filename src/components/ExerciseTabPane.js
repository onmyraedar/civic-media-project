import Tab from "react-bootstrap/Tab";

export default function ExerciseTabPane({ item }) {
  return(
    <Tab.Pane eventKey={`#${item.id}`} key={`#${item.id}`}>
      <h4>Exercise content goes here...</h4>
      <h6>{item.menuLabel}</h6>
    </Tab.Pane>
  );
}