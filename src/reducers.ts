import { combineReducers } from "redux";
import items from "./WorkItem/workItemReducer";
// import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  items,
});
