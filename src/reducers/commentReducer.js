import {
  GET_COMMENTS_PER_MOVIE,
  GET_COMMENTS_ALL,
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  GET_COMMENT
} from "../actions/types";

const initialState = {
  comments: {},
  comment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_PER_MOVIE:
      if (action.payload && action.payload.length > 0) {
        return {
          ...state,
          comments: action.payload
        };
      } else {
        return { ...state, comments: null };
      }
    case GET_COMMENTS_ALL:
      if (action.payload && action.payload.length > 0) {
        return {
          ...state,
          comments: action.payload
        };
      } else {
        return { ...state, comments: null };
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };
    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };

    case GET_COMMENT:
      return { ...state, comment: action.payload };

    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? (comment = action.payload)
            : comment
        )
      };
    default:
      return state;
  }
}
