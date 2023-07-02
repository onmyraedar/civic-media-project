import { createSearchParams, redirect, Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { getFirstContentId } from "./utils";
import data from "./data/civicPrototype.json";

/**
 * Retrieves a user's search parameters from form data when a search form
 * is submitted.
 * Redirects the user to a search results page. The URL of the results
 * page contains the search parameters.
 */
export async function action({ request }) {
  const formData = await request.formData();
  const searchConstraints = Object.fromEntries(formData);
  if ("exerciseId" in searchConstraints) {
    const exercise = data.exercises.find(exercise => exercise.id === searchConstraints.exerciseId);
    return redirect(`/exercises/${exercise.id}/${getFirstContentId(exercise)}`);
  } else {
    return redirect(`/search?${createSearchParams(searchConstraints)}`);
  }
}

export default function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
