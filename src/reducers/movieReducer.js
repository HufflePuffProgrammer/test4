import {
  GET_MOVIES,
  GET_MOVIE,
  DELETE_MOVIE,
  ADD_MOVIE,
  UPDATE_MOVIE
} from "../actions/types";

const initialState = {
  movies: [],
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case ADD_MOVIE:
      return { ...state, movies: [action.payload, ...state.movies] };

    case GET_MOVIE:
      return { ...state, movie: action.payload };

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === Number(action.payload.id)
            ? (movie = action.payload)
            : movie
        )
      };
    default:
      return state;
  }
}
