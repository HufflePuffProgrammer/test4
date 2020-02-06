import {
  GET_MOVIES,
  GET_MOVIE,
  DELETE_MOVIE,
  ADD_MOVIE,
  UPDATE_MOVIE
} from "./types";
import axios from "axios";

export const getMovies = () => async dispatch => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/hufflepuffprogrammer/test4/movies/"
  );

  var moviesTemp = res.data;
  var moviesEmpty = [];
  if (moviesTemp && moviesTemp.length > 0) {
    dispatch({
      type: GET_MOVIES,
      payload: moviesTemp
    });
  } else {
    dispatch({
      type: GET_MOVIES,
      payload: moviesEmpty
    });
  }
};
export const getMovie = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test4/movies/${id}`
    );
    if (res.data) {
      dispatch({
        type: GET_MOVIE,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_MOVIE,
        payload: {}
      });
    }
  } catch {
    dispatch({
      type: GET_MOVIE,
      payload: {}
    });
  }
};
export const updateMovie = movie => async dispatch => {
  try {
    const res = await axios.put(
      `http://my-json-server.typicode.com/hufflepuffprogrammer/test4/movies/`,
      movie
    );
    dispatch({
      type: UPDATE_MOVIE,
      payload: res.data
    });
  } catch {
    dispatch({
      type: UPDATE_MOVIE,
      payload: movie
    });
  }
};
export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(
      `http://my-json-server.typicode.com/hufflepuffprogrammer/test4/movies/${id}`
    );
    dispatch({
      type: DELETE_MOVIE,
      payload: id
    });
  } catch {
    dispatch({
      type: DELETE_MOVIE,
      payload: id
    });
  }
};
export const addMovie = movie => async dispatch => {
  try {
    const res = await axios.post(
      "http://my-json-server.typicode.com/hufflepuffprogrammer/test4/movies",
      movie
    );
    dispatch({
      type: ADD_MOVIE,
      payload: res.data
    });
  } catch {
    dispatch({
      type: ADD_MOVIE,
      payload: movie
    });
  }
};
