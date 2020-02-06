import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MovieAlone extends Component {
  render() {
    const { id, title, desc, writer, director, poster } = this.props.movie;

    return (
      <div className="container ">
        <div className="row">
          <div className="col md-9 py-2">
            <table className="table">
              <tbody>
                <tr>
                  <td width="20%">
                    <img
                      src={poster}
                      alt={title}
                      className="img-thumbnail"
                    ></img>
                  </td>
                  <td width="80%">
                    <div className="row">
                      <h4>
                        <Link to={`/movie/detail/${id}`} className="nav-link">
                          {title}
                        </Link>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

MovieAlone.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieAlone;
