import React, { Component } from "react";
import Comment from "./Comment";
import MovieAlone from "../movies/MovieAlone";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCommentsPerMovie } from "../../actions/commentActions";
import { getMovie } from "../../actions/movieActions";

class CommentsPerMovie extends Component {
  onDeleteClick = id => {
    this.props.deleteComment(id);
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
    this.props.getCommentsPerMovie(id);
  }
  displayComments(comments) {
    return (
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} commentProps={comment} />
        ))}
      </div>
    );
  }
  render() {
    var comments = this.props.comments;
    const movie = this.props.movie;
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <header id="main-header" className="py-0 bg-success text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-folder"></i> Comments
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="search" className="py-2 mb-6 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link to="/" className="btn btn-light btn-block">
                  <i className="fas fa-arrow-left"></i>Back
                </Link>
              </div>
              <div className="col-md-3">
                <Link
                  to={`/comments/add/${id}`}
                  className="btn btn-primary btn-block"
                >
                  <i className="fas fa-plus"></i> Add Comment
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="movie">
          <table className="table">
            {<MovieAlone key={movie.id} movie={movie} />}
          </table>
        </section>
        <div className="row">
          <div className="col md-9">
            <section id="header">
              <header
                id="main-header"
                className="py-1 bg-success text-white"
              ></header>
            </section>

            <table className="table table-striped">
              {comments && comments.length > 0 ? (
                this.displayComments(comments)
              ) : (
                <div>No Comments</div>
              )}
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CommentsPerMovie.propTypes = {
  comments: PropTypes.array.isRequired,
  getCommentsPerMovie: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comment.comments,
  movie: state.movie.movie
});

export default connect(mapStateToProps, { getCommentsPerMovie, getMovie })(
  CommentsPerMovie
);
