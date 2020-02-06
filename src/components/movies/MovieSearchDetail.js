import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovie } from "../../actions/movieActions";

class MovieSearchDetail extends Component {
  componentDidMount() {
    //const { id } = this.props.match.params;
    const { movieid } = this.props;
    this.props.getMovie(movieid);
  }
  // displayMovie(movie) {
  //   return (
  //     <div>
  //       <td>
  //         <Link to={`movie/view/${movieid}`}>
  //           <img src={poster} alt={title} class="img-thumbnail"></img>
  //         </Link>
  //       </td>
  //       <td>
  //         <div class="row">
  //           <h6>
  //             <Link to={`movie/detail/${movieid}`}>
  //               <strong>{title}</strong>
  //             </Link>
  //           </h6>
  //         </div>
  //         <div class="row">
  //           <text class="mr-1 font-weight-bold">Dir: </text> {director}
  //         </div>
  //         <div class="row">
  //           <text class="mr-1 font-weight-bold">Writer: </text> {writer}
  //         </div>
  //         <div class="row">
  //           <text class="mr-1 font-weight-bold">Summary: </text> {desc}
  //         </div>
  //       </td>
  //     </div>
  //   );
  // }
  render() {
    //const { movieid } = this.props;

    // const { id, title, director, writer, desc, poster } = this.props.movie;
    var movie = this.props.movie;
    // //movieIsNull = this.props.movie;
    // if (movie === null) {
    //   movie = null;
    // } else {
    //   movie = this.props.movie;
    // }

    return (
      <React.Fragment>
        {movie === null ? (
          <div class="row">Empty</div>
        ) : (
          <div class="row">
            <Link to={`movie/detail/${movie.id}`}>Movie</Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}
MovieSearchDetail.propTypes = {
  movie: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});
export default connect(mapStateToProps, { getMovie })(MovieSearchDetail);
