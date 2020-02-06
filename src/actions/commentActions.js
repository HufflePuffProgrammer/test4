import {
  GET_COMMENTS_PER_MOVIE,
  GET_COMMENTS_ALL,
  GET_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT
} from "./types";
import axios from "axios";

export const getCommentsPerMovie = id => async dispatch => {
  var commentsFiltered = null;
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/hufflepuffprogrammer/test4/comments/"
    );
    const comments = res.data;
    commentsFiltered = comments.filter(
      comment => comment.movieid === Number(id)
    );
    dispatch({
      type: GET_COMMENTS_PER_MOVIE,
      payload: commentsFiltered
    });
  } catch {
    dispatch({
      type: GET_COMMENTS_PER_MOVIE,
      payload: commentsFiltered
    });
  }
};

export const getCommentsAll = () => async dispatch => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/hufflepuffprogrammer/test4/comments/"
  );
  const commentsAll = res.data;

  if (commentsAll && commentsAll.length > 0) {
    dispatch({
      type: GET_COMMENTS_ALL,
      payload: commentsAll
    });
  } else {
    dispatch({
      type: GET_COMMENTS_ALL,
      payload: null
    });
  }
};

export const getComment = id => async dispatch => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/hufflepuffprogrammer/test4/comments/${id}`
  );

  dispatch({
    type: GET_COMMENT,
    payload: res.data
  });
};

export const deleteComment = id => async dispatch => {
  try {
    await axios.delete(
      `http://my-json-server.typicode.com/hufflepuffprogrammer/test4/comments/${id}`
    );
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    });
  } catch {
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    });
  }
};

export const addComment = comment => async dispatch => {
  try {
    const res = await axios.post(
      "http://my-json-server.typicode.com/hufflepuffprogrammer/test4/comments",
      comment
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  } catch {
    dispatch({
      type: ADD_COMMENT,
      payload: comment
    });
  }
};
export const updateComment = comment => async dispatch => {
  try {
    const res = await axios.put(
      `http://my-json-server.typicode.com/hufflepuffprogrammer/test4/comment/`,
      comment
    );
    dispatch({
      type: UPDATE_COMMENT,
      payload: res.data
    });
  } catch {
    dispatch({
      type: UPDATE_COMMENT,
      payload: comment
    });
  }
};
