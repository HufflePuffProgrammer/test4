import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCommentsPerMovie } from "../../actions/commentActions";

class Movie extends Component {
  state = {
    comments: []
  };

  render() {
    const { id, title, desc, writer, director, poster } = this.props.movie;
    return (
      <tr>
        <td>
          <Link to={`movie/detail/${id}`}>
            <img src={poster} alt={title} className="img-thumbnail"></img>
          </Link>
        </td>
        <td>
          <div className="row">
            <h4>
              {" "}
              <Link to={`movie/detail/${id}`}>{title}</Link>
            </h4>
          </div>
          <div className="row">
            <strong>Dir: </strong> {director}
          </div>
          <div className="row">
            <strong>Writer: </strong> {writer}
          </div>
          <div className="row">
            <strong>Summary: </strong> {desc}
          </div>

          <div className="row">
            <Link to={`comments/commentspermovie/${id}`}>Comments</Link>
          </div>
        </td>
      </tr>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  getCommentsPerMovie: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
  //commentsFiltered: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  comments: state.comment.comments
  //commentsFiltered: state.comment.commentsFiltered
});

export default connect(mapStateToProps, { getCommentsPerMovie })(Movie);
