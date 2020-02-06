import React, { Component } from "react";
import MovieDetailText from "./MovieDetailText";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovie, deleteMovie } from "../../actions/movieActions";

class MovieDetail extends Component {
  state = {
    id: "",
    title: "",
    writer: "",
    director: "",
    poster: "",
    desc: ""
  };
  componentWillReceiveProps(nextProps, nextState) {
    const { title, writer, director, poster, desc } = nextProps.movie;
    this.setState({
      title,
      writer,
      director,
      poster,
      desc
    });
    console.log("title Will Receive");
    console.log(this.state.title);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
    console.log("title Did Mount");
    console.log(this.state);

    // const res = await axios.get(
    //   `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    // );

    // const movie = res.data;

    // this.setState({
    //   movieID: movie.id,
    //   title: movie.title,
    //   desc: movie.desc,
    //   writer: movie.writer,
    //   director: movie.director
    // });
  }

  onDeleteClick = async (id, dispatch) => {
    // try {
    //   await axios.delete(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    //   );
    //dispatch({ type: "DELETE_MOVIE", payload: id });
    // } catch (e) {
    //   dispatch({ type: "DELETE_MOVIE", payload: id });
    // }
    // dispatch({ type: "DELETE_MOVIE", payload: id });
    // this.props.history.push("/");
    this.props.deleteMovie(id);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // const { movieID } = this.state;
    // const { movies, dispatch } = this.props;
    // const moviesPerMovieID = movies.filter(
    //   movie => Number(movie.id) === Number(movieID)
    // );
    //const { title, director, writer, desc, poster, errors } = this.state.movie;
    console.log("title");
    console.log(this.state.movie);
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
                <Link className="btn btn-warning btn-block">
                  <i className="fas fa-pencil-alt"></i>Edit
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="#" className="btn btn-danger btn-block">
                  <i className="far fa-trash-alt"></i>Delete
                </Link>
              </div>
              <div className="col-md-3">
                <Link to={`/movie/add/`} className="btn btn-success btn-block">
                  <i className="fas fa-plus"></i>Add
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="movie">
          <table className="table">
            {/* {moviesPerMovieID.map(movie => (
               <MovieDetailText key={movie.id} movie={movie} />
             )) */}{" "}
            }
          </table>
        </section>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps, { getMovie, deleteMovie })(MovieDetail);
