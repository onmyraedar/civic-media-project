import { Outlet } from "react-router-dom";

import Header from "./components/Header";

export default function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <Outlet />
    </div>
  );
}
