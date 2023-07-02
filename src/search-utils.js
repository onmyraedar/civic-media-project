import { ListUl, Search } from "react-bootstrap-icons";

/**
 * Sorts queries before exercises in the list of search options.
 */
export function compareSearchOptions(option1, option2) {
  if (typeof option1 === "string" && typeof option2 !== "string") {
    return -1;
  } else if (typeof option2 === "string" && typeof option1 !== "string") {
    return 1;
  }
  return 0;
}

export function getSearchOptionLabel(option) {
  if (typeof option === "string") {
    return option;
  } else {
    return option.title;
  }
}

export function groupSearchOption(option) {
  if (typeof option === "string") {
    return "Suggestions";
  } else {
    return "Exercises";
  }
}

export function renderSearchOption(props, option) {
  if (typeof option === "string") {
    return(
      <li {...props}>
        <Search className="me-2" />
        {option}
      </li>
    );    
  } else {
    return(
      <li {...props}>
        <ListUl className="me-2" />
        {option.title}
      </li>
    );
  }
}