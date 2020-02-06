import React, { Component } from "react";
import CommentPerMovieText from "./CommentPerMovieText";
import PropTypes from "prop-types";

class CommentPerMovie extends Component {
  render() {
    const { comment, movieid } = this.props;
    return (
      <CommentPerMovieText
        commentText={comment}
        key={movieid}
        movieid={movieid}
      />
    );
  }
}

CommentPerMovie.propTypes = {
  comment: PropTypes.object.isRequired,
  movieid: PropTypes.number.isRequired
};
export default CommentPerMovie;
