import Header from "./components/Header";
import Homepage from "./components/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <Homepage />
    </div>
  );
}
