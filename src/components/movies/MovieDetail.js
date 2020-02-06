import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovie, deleteMovie } from "../../actions/movieActions";
import Loading from "../layout/Loading";

class MovieDetail extends Component {
  state = {
    id: "",
    title: "",
    writer: "",
    director: "",
    poster: "",
    desc: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
  }

  onDeleteClick = id => {
    this.props.deleteMovie(id);
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { movie } = this.props;

    if (movie) {
      const { id, title, director, writer, desc, poster } = this.props.movie;
      return (
        <div>
          <header id="main-header" class="py-0 bg-success text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <i className="fas fa-film"></i> Movie
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <section id="search" class="py-2 mb-6 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/" class="btn btn-light btn-block">
                    <i className="fas fa-arrow-left"></i> Back
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to={`/movie/edit/${id}`}
                    className="btn btn-warning btn-block"
                  >
                    <i className="fas fa-pencil-alt"></i>Edit
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to="#"
                    className="btn btn-danger btn-block"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
                    <i className="far fa-trash-alt"></i>Delete
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to={`/movie/add/`}
                    className="btn btn-success btn-block"
                  >
                    <i className="fas fa-plus"></i>Add
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="movie">
            <table className="table">
              <tbody>
                <tr>
                  <td width="20%">
                    <img src={poster} alt={title} class="img-thumbnail"></img>
                  </td>
                  <td width="80%">
                    <div class="row">
                      <h4>{title}</h4>
                    </div>
                    <div class="row">
                      <strong>Dir: </strong> {director}
                    </div>
                    <div class="row">
                      <strong>Writer: </strong> {writer}
                    </div>
                    <div class="row">
                      <strong>Summary: </strong> {desc}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(mapStateToProps, { getMovie, deleteMovie })(MovieDetail);
