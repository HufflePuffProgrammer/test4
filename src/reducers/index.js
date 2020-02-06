import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  movie: movieReducer,
  comment: commentReducer
});
