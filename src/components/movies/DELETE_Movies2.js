import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movieActions";

class Movies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;

          return (
            <React.Fragment>
              <section id="search" class="py-2 mb-2 bg-light">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <Link
                        to="/movie/add"
                        className="btn btn-primary btn-block"
                      >
                        <i class="fas fa-plus"></i> Add Movie
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

              <div class="container">
                <div class="row">
                  <div class="col md-9">
                    <table class="table table-striped">
                      <thead class="thead-dark">
                        <th width="20%">Poster</th>
                        <th width="40%">Movie</th>
                        <th width="40%">Comments</th>
                      </thead>
                      <tbody>
                        {movies.map(movie => (
                          <Movie key={movie.id} movie={movie} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
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
