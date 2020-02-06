import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentPerMovie from "../comments/CommentPerMovie";
import axios from "axios";

class Movie extends Component {
  //? DELETE?
  // onDeleteClick = async (id, dispatch) => {
  //   try {
  //     await axios.delete(
  //       `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
  //     );
  //     dispatch({ type: "DELETE_MOVIE", payload: id });
  //   } catch (e) {
  //     dispatch({ type: "DELETE_MOVIE", payload: id });
  //   }
  // };

  render() {
    const { id, title, desc, writer, director, poster } = this.props.movie;

    return (
      <tr>
        <td>
          <Link to={`movie/detail/${id}`}>
            <img src={poster} alt={title} class="img-thumbnail"></img>
          </Link>
        </td>
        <td>
          <div class="row">
            <h4>
              {" "}
              <Link to={`movie/detail/${id}`}>{title}</Link>
            </h4>
          </div>
          <div class="row">
            <text class="mr-1 font-weight-bold">Dir: </text> {director}
          </div>
          <div class="row">
            <text class="mr-1 font-weight-bold">Writer: </text> {writer}
          </div>
          <div class="row">
            <text class="mr-1 font-weight-bold">Summary: </text> {desc}
          </div>
        </td>
        <td>
          <table class="table">
            {/* {firstCommentPerMovie.slice(0, 1).map(comment => (
            <CommentPerMovie key={id} movieid={id} comment={comment} />
          ))} */}
          </table>
        </td>
      </tr>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default Movie;
