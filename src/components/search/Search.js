import React, { Component } from "react";
import Select from "react-select";
import CommentSearchDetail from "../comments/CommentSearchDetail";
import { getCommentsAll } from "../../actions/commentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";

class Search extends Component {
  constructor() {
    super();

    const selectGenresTemp = [
      { label: "None", value: null },
      { label: "Superhero", value: "superhero" },
      { label: "Dude with a problem", value: "dude_with_a_problem" },
      { label: "Golden Fleece", value: "golden_fleece" },
      { label: "Buddy Love", value: "buddy_love" },
      { label: "Institutionalized", value: "institutionalized" }
    ];
    const selectGoodTemp = [
      { label: "None", value: null },
      { label: "Good - Opening Image", value: "opening_good" },
      { label: "Good - Character", value: "character_good" },
      { label: "Good - Dialogue", value: "dialogue_good" },
      { label: "Good - Premise", value: "premise_good" }
    ];
    const selectPoorTemp = [
      { label: "None", value: null },
      { label: "Poor - Opening", value: "opening_poor" },
      { label: "Poor - Character", value: "character_poor" },
      { label: "Poor - Dialogue", value: "dialogue_poor" },
      { label: "Poor - Premise", value: "premise_poor" }
    ];
    this.state = {
      selectedGenreOptionValue: null,
      selectedGoodOptionValue: null,
      selectedPoorOptionValue: null,
      selectPoor: selectPoorTemp,
      selectGood: selectGoodTemp,
      selectGenres: selectGenresTemp
    };

    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handlePoorClick = this.handlePoorClick.bind(this);
  }
  componentDidMount() {
    this.props.getCommentsAll();
  }
  handleGenreClick = selectedGenreOption => {
    const { value } = selectedGenreOption;
    this.setState({ selectedGenreOptionValue: value });
  };

  handleGoodClick = selectedGoodOption => {
    const { value } = selectedGoodOption;
    this.setState({ selectedGoodOptionValue: value });
  };

  handlePoorClick = selectedPoorOption => {
    const { value } = selectedPoorOption;
    this.setState({ selectedPoorOptionValue: value });
  };

  render() {
    const { comments } = this.props;

    if (comments) {
      const {
        selectedPoorOptionValue,
        selectedGoodOptionValue,
        selectedGenreOptionValue
      } = this.state;

      // filter within a map.
      // filtering should be done by middle tier or db.
      // BEGIN
      var commentsFiltered = comments;
      var commentsFilteredbyGenre = comments;

      switch (selectedGenreOptionValue) {
        case "superhero":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.superhero === true
          );
          break;
        case "dude_with_a_problem":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.dude_with_a_problem === true
          );
          break;
        case "golden_fleece":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.golden_fleece === true
          );
          break;
        case "fool_triumphant":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.fool_triumphant === true
          );
          break;
        case "buddy_love":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.buddy_love === true
          );
          break;
        case "institutionalized":
          commentsFilteredbyGenre = commentsFiltered.filter(
            comment => comment.checkboxes.institutionalized === true
          );
          break;
        default:
          break;
      }

      //Filter by Good Option
      var commentsFilteredbyGoodOption = commentsFilteredbyGenre;
      switch (selectedGoodOptionValue) {
        case "opening_good":
          commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
            comment => comment.checkboxes.opening_good === true
          );
          break;
        case "character_good":
          commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
            comment => comment.checkboxes.character_good === true
          );
          break;
        case "dialogue_good":
          commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
            comment => comment.checkboxes.dialogue_good === true
          );
          break;
        case "premise_good":
          commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
            comment => comment.checkboxes.premise_good === true
          );
          break;
        default:
          break;
      }
      //Filter by Good Option
      var commentsFilteredbyPoorOption = commentsFilteredbyGoodOption;
      switch (selectedPoorOptionValue) {
        case "opening_poor":
          commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
            comment => comment.checkboxes.opening_poor === true
          );
          break;
        case "character_poor":
          commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
            comment => comment.checkboxes.character_poor === true
          );
          break;
        case "dialogue_poor":
          commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
            comment => comment.checkboxes.dialogue_poor === true
          );
          break;
        case "premise_poor":
          commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
            comment => comment.checkboxes.premise_poor === true
          );
          break;
        default:
          break;
      }
      commentsFiltered = commentsFilteredbyPoorOption;

      if (commentsFiltered && commentsFiltered.length > 0) {
        return (
          <React.Fragment>
            <header id="main-header" className="py-0 bg-success text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <h5>
                      <i className="fas fa-search"></i>Search Movies
                    </h5>
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
                </div>
              </div>
            </section>

            <section id="search" className="py-2 mb-6 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    Genres{" "}
                    <Select
                      options={this.state.selectGenres}
                      onChange={this.handleGenreClick}
                      value={this.state.selectedGenreOption}
                    />
                  </div>

                  <div className="col-md-4">
                    Good{" "}
                    <Select
                      options={this.state.selectGood}
                      onChange={this.handleGoodClick}
                      value={this.state.selectedGoodOption}
                    />
                  </div>
                  <div className="col-md-4">
                    Poor{" "}
                    <Select
                      options={this.state.selectPoor}
                      onChange={this.handlePoorClick}
                      value={this.state.selectedPoorOption}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="row">
              <div className="col md-9">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th width="70%">Comments</th>

                      <th width="30%">Movie</th>
                    </tr>
                  </thead>

                  {commentsFiltered.map(comment => (
                    <CommentSearchDetail
                      key={comment.movieid}
                      movieid={comment.movieid}
                      comment={comment}
                    />
                  ))}
                </table>
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        return <Loading />;
      }
      // END
    } else {
      return <Loading />;
    }
  }
}

Search.propTypes = {
  comments: PropTypes.array.isRequired,
  getCommentsAll: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  comments: state.comment.comments
});

export default connect(mapStateToProps, { getCommentsAll })(Search);
