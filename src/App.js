import Header from "./components/Header";
import Homepage from "./components/Homepage";

export default function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <Homepage />
    </div>
  );
}
