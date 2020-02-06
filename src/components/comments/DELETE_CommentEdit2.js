import React, { Component } from "react";
import Checkbox from "../checkboxes/Checkbox";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextInputGroup from "../layout/TextInputGroup";
import { Link } from "react-router-dom";
import { updateComment, deleteComment } from "../../actions/commentActions";

class CommentEdit extends Component {
  constructor(props) {
    super(props);

    let listCheckboxes = [];

    listCheckboxes["opening_good"] = false;
    listCheckboxes["premise_good"] = false;
    listCheckboxes["character_good"] = false;
    listCheckboxes["dialogue_good"] = false;

    listCheckboxes["opening_poor"] = false;
    listCheckboxes["premise_poor"] = false;
    listCheckboxes["character_poor"] = false;
    listCheckboxes["dialogue_poor"] = false;

    listCheckboxes["dude_with_a_problem"] = false;
    listCheckboxes["golden_fleece"] = false;
    listCheckboxes["buddy_love"] = false;
    listCheckboxes["institutionalized"] = false;
    listCheckboxes["superhero"] = false;

    this.state = {
      id: 0,
      movieid: 0,
      title: "",
      user: "",
      commentText: "",
      checkboxes: listCheckboxes,
      errors: {}
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  //Delete from CommentEdit page.
  onDeleteClick = id => {
    // try {
    //   await axios.delete(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    //   );
    //   dispatch({ type: "DELETE_COMMENT", payload: id });
    // } catch (e) {
    //   dispatch({ type: "DELETE_COMMENT", payload: id });
    // }

    this.props.history.push(`/comments/${this.state.movieid}`);
  };

  componentDidMount() {
    const { comment } = this.props;
    console.log("Component Edit");
    console.log(this.props.comment);
  }

  onSubmit = e => {
    e.preventDefault();
    const { id, commentText, checkboxes, movieid, user, title } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (user === "") {
      this.setState({ errors: { user: "User is required" } });
      return;
    }
    if (commentText === "") {
      this.setState({ errors: { comment_text: "Comment is required" } });
      return;
    }
    //updComment has updated data in component
    const updComment = {
      id,
      movieid,
      comment_text: commentText,
      title,
      user,
      opening_poor: checkboxes["opening_poor"],
      premise_poor: checkboxes["premise_poor"],
      character_poor: checkboxes["character_poor"],
      dialogue_poor: checkboxes["dialogue_poor"],

      opening_good: checkboxes["opening_good"],
      premise_good: checkboxes["premise_good"],
      character_good: checkboxes["character_good"],
      dialogue_good: checkboxes["dialogue_good"],

      dude_with_a_problem: checkboxes["dude_with_a_problem"],
      golden_fleece: checkboxes["golden_fleece"],
      buddy_love: checkboxes["buddy_love"],
      institutionalized: checkboxes["institutionalized"],
      superhero: checkboxes["superhero"]
    };
    // const { id } = this.props.match.params;
    // const res = await axios.put(
    //   `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments/${id}`,
    //   updComment
    // );

    //dispatch({ type: "UPDATE_COMMENT", payload: updComment });
    this.props.updateComment(updComment);
    //Clear fields
    this.setState({
      id,
      movieid,
      title,
      user,
      commentText,
      checkboxes: [],
      errors: {}
    });
    this.props.history.push(`/comments/${movieid}`);
  };

  handleCheckboxChange(event) {
    const { name } = event.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  }
  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: { ...prevState.checkboxes, [checkbox]: isSelected }
      }));
    });
  };
  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);
  handleTextboxChange = e => this.setState({ [e.target.name]: e.target.value });

  createPoorCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Poor Points</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="opening_poor"
          label="Opening"
          key="opening_poor"
          isSelected={checkboxes["opening_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="premise_poor"
          label="Premise"
          key="premise_poor"
          isSelected={checkboxes["premise_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="character_poor"
          label="Character"
          key="character_poor"
          isSelected={checkboxes["character_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_poor"
          label="Dialogue"
          key="dialogue_poor"
          isSelected={checkboxes["dialogue_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };
  createGoodCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Good Points</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="opening_good"
          label="Opening"
          key="opening_good"
          isSelected={checkboxes["opening_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="premise_good"
          label="Premise"
          key="premise_good"
          isSelected={checkboxes["premise_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="character_good"
          label="Character"
          key="character_good"
          isSelected={checkboxes["character_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_good"
          label="Dialogue"
          key="dialogue_good"
          isSelected={checkboxes["dialogue_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };

  createGenreCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Genres</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="dude_with_a_problem"
          label="Dude with a problem"
          key="dude_with_a_problem"
          isSelected={checkboxes["dude_with_a_problem"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="golden_fleece"
          label="Golden Fleece"
          key="golden_fleece"
          isSelected={checkboxes["golden_fleece"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="buddy_love"
          label="Buddy Love"
          key="buddy_love"
          isSelected={checkboxes["buddy_love"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="institutionalized"
          label="Institutionalized"
          key="institutionalized"
          isSelected={checkboxes["institutionalized"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="superhero"
          label="Superhero"
          key="superhero"
          isSelected={checkboxes["superhero"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    var { title, commentText, user, errors, id } = this.state;
    console.log("Title from state");
    console.log(title);

    return (
      <div>
        <header id="main-header" class="py-2 bg-warning text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>
                  <i class="far fa-comments"></i> Comment Edit
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <form onSubmit={this.onSubmit.bind(this)}>
                    <div class="row">
                      {this.createGoodCheckboxes()}
                      {this.createPoorCheckboxes()}
                      {this.createGenreCheckboxes()}

                      <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.selectAll}
                      >
                        {" "}
                        Select All
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.deselectAll}
                      >
                        Deselect All
                      </button>
                    </div>
                    <div class="row mt-4"></div>

                    <div class="row">
                      <div class="col-sm-12">
                        <TextInputGroup
                          type="text"
                          name="title"
                          label="Title"
                          value={title}
                          placeHolder="Enter a title"
                          onChange={this.onChange}
                          error={errors.title}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <TextInputGroup
                          type="text"
                          name="user"
                          label="User"
                          value={user}
                          placeHolder="Enter a user"
                          onChange={this.onChange}
                          error={errors.user}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <TextInputGroup
                          type="text"
                          name="commentText"
                          label="Comment"
                          value={commentText}
                          placeHolder="Enter a comment"
                          onChange={this.onChange}
                          error={errors.comment_text}
                        />
                      </div>
                    </div>
                    <section id="actions" class="py-4 mb-4 bg-light">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3">
                            <Link to="/" className="btn btn-light btn-block">
                              <i class="fas fa-arrow-left"></i>Back
                            </Link>
                          </div>
                          <div class="col-md-3">
                            <input
                              class="btn btn-warning btn-block"
                              type="submit"
                            />
                          </div>

                          <div class="col-md-3">
                            <Link
                              to="#"
                              className="btn btn-danger btn-block"
                              onClick={this.onDeleteClick.bind(this, id)}
                            >
                              <i className="far fa-trash-alt"></i>Delete
                            </Link>
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
      </div>
    );
  }
}

CommentEdit.propTypes = {
  comment: PropTypes.object.isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comment: state.comment.comment
});

export default connect(mapStateToProps, {
  updateComment,
  deleteComment
})(CommentEdit);
