import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context";

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
                      <a href="/movie/add" class="btn btn-primary btn-block">
                        <i class="fas fa-plus"></i> Add Movie
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href={`/search`} className="btn btn-info btn-block">
                        <i class="fas fa-search"></i>Search
                      </a>
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

export default Movies;
