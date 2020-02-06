import React, { Component } from "react";
import Movie from "./Movie";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movieActions";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;
    if (movies) {
      return (
        <React.Fragment>
          <section id="search" className="py-2 mb-2 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/movie/add" className="btn btn-primary btn-block">
                    <i className="fas fa-plus"></i> Add Movie
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/search" className="btn btn-success btn-block">
                    <i className="fas fa-search"></i>Search
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="row">
              <div className="col md-9">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th width="20%">Poster</th>
                      <th width="80%">Movie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map(movie => (
                      <Movie key={movie.id} movieid={movie.id} movie={movie} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Loading />;
    }
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps, { getMovies })(Movies);
