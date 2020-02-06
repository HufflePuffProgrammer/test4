import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovie, updateMovie } from "../../actions/movieActions";

class MovieEdit extends Component {
  state = {
    id: "",
    title: "",
    writer: "",
    director: "",
    poster: "",
    desc: "",
    errors: {}
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
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
  }
  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   const res = await axios.get(
  //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
  //   );

  //   const movie = res.data;

  //   this.setState({
  //     title: movie.title,
  //     desc: movie.desc,
  //     writer: movie.writer,
  //     director: movie.director,
  //     poster: movie.poster
  //   });
  // }

  onSubmit = e => {
    e.preventDefault();
    const { title, desc, writer, director, poster, errors } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (director === "") {
      this.setState({ errors: { director: "Director is required" } });
      return;
    }
    if (writer === "") {
      this.setState({ errors: { writer: "Writer is required" } });
      return;
    }
    if (poster === "") {
      this.setState({ errors: { poster: "Poster is required" } });
      return;
    }
    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }

    const { id } = this.props.match.params;

    const updMovie = {
      id,
      title,
      desc,
      writer,
      director,
      poster
    };
    this.props.updateMovie(updMovie);

    // try {
    //   // Implement DB
    //   const res = await axios.put(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`,
    //     updMovie
    //   );
    //   dispatch({ type: "UPDATE_MOVIE", payload: res.data });
    // } catch (e) {
    //   dispatch({ type: "UPDATE_MOVIE", payload: updMovie });
    // }

    //clear fields
    this.setState({
      title: "",
      desc: "",
      writer: "",
      director: "",
      poster: "",
      errors: {}
    });
    this.props.history.push(`/movie/detail/${id}`);
    // this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, director, writer, desc, poster, errors } = this.state;

    return (
      // BUG when I try to remove the first item of the array.
      // Then access the object's properties. It's undefined.
      // Please fix.
      // const moviesFromDB = movies.filter(movie => movie.id === 1);
      // const myMovie = moviesFromDB.shift();
      // console.log("Movie from DB after shift()");
      // console.log(myMovie);
      // console.log(myMovie.title);
      //const movie = moviesFromDB[0];
      // console.log("movie");
      // console.log(movie);

      <div>
        <header id="main-header" class="py-1 bg-warning text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>
                  <i class="fas fa-film"></i> Movies Edit
                </h4>
              </div>
            </div>
          </div>
        </header>

        <section id="movie">
          {" "}
          <div class="container">
            {" "}
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <TextInputGroup
                        type="text"
                        name="title"
                        label="Title"
                        value={title}
                        placeHolder="Enter the Title"
                        onChange={this.onChange}
                        error={errors.title}
                      />
                      <TextInputGroup
                        type="text"
                        name="director"
                        label="Director"
                        value={director}
                        placeHolder="Enter the Director"
                        onChange={this.onChange}
                        error={errors.director}
                      />
                      <TextInputGroup
                        type="text"
                        name="writer"
                        label="Writer"
                        value={writer}
                        placeHolder="Enter the Writer"
                        onChange={this.onChange}
                        error={errors.writer}
                      />
                      <TextInputGroup
                        type="text"
                        name="poster"
                        label="Poster"
                        value={poster}
                        placeHolder="http://www.abc.com"
                        onChange={this.onChange}
                        error={errors.poster}
                      />
                      <TextInputGroup
                        type="text"
                        name="desc"
                        value={desc}
                        label="Description"
                        placeHolder="Enter a Description"
                        onChange={this.onChange}
                        error={errors.desc}
                      />
                      <section id="actions" class="py-4 mb-4 bg-light">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <Link to="/" class="btn btn-light btn-block">
                                <i class="fas fa-arrow-left"></i>Back
                              </Link>
                            </div>
                            <div class="col-md-3">
                              <input
                                class="btn btn-warning btn-block"
                                type="submit"
                              />
                            </div>
                          </div>
                        </div>
                      </section>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
MovieEdit.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  movie: state.movie.movie
});
export default connect(mapStateToProps, { getMovie, updateMovie })(MovieEdit);
