import { createSearchParams, redirect, Outlet } from "react-router-dom";

import Header from "./components/Header";

/**
 * Retrieves a user's search parameters from form data when a search form
 * is submitted.
 * Redirects the user to a search results page. The URL of the results
 * page contains the search parameters.
 */
export async function action({ request }) {
  const formData = await request.formData();
  const searchConstraints = Object.fromEntries(formData);
  return redirect(`/search?${createSearchParams(searchConstraints)}`);
}

export default function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <Outlet />
    </div>
  );
}
