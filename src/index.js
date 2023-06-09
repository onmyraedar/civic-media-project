import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App, { action as appAction } from "./App";
import ExercisePage from "./components/ExercisePage";
import ErrorPage from "./components/ErrorPage";
import GetInvolvedPage from "./components/GetInvolvedPage";
import Homepage from "./components/Homepage";
import SearchResults, { loader as searchLoader } from "./components/SearchResults";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} action={appAction}>
      <Route index element={<Homepage />} />
      <Route path="/exercises/:exerciseId/:contentId"
        element={<ExercisePage />}
        errorElement={<ErrorPage />}
      />
      <Route path="search" element={<SearchResults />} loader={searchLoader} />
      <Route path="get-involved" element={<GetInvolvedPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
