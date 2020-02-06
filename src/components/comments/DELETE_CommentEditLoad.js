import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Checkbox from "../checkboxes/Checkbox";
import CommentEdit from "./CommentEdit";
import { getComment } from "../../actions/commentActions";
import TextInputGroup from "../layout/TextInputGroup";

class CommentEditLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {
      id,
      movieid,
      title,
      user,
      comment_text,
      checkboxes
    } = nextProps.comment;

    this.setState({
      id,
      movieid,
      title,
      user,
      comment_text,
      checkboxes
    });
    //var listCheckboxes = [];

    // listCheckboxes["opening_poor"] = comment.opening_poor;
    // listCheckboxes["premise_poor"] = comment.premise_poor;
    // listCheckboxes["character_poor"] = comment.character_poor;
    // listCheckboxes["dialogue_poor"] = comment.dialogue_poor;

    // listCheckboxes["opening_good"] = comment.opening_good;
    // listCheckboxes["premise_good"] = comment.premise_good;
    // listCheckboxes["character_good"] = comment.character_good;
    // listCheckboxes["dialogue_good"] = comment.dialogue_good;

    // listCheckboxes["dude_with_a_problem"] = comment.dude_with_a_problem;
    // listCheckboxes["golden_fleece"] = comment.golden_fleece;
    // listCheckboxes["buddy_love"] = comment.buddy_love;
    // listCheckboxes["institutionalized"] = comment.institutionalized;
    // listCheckboxes["superhero"] = comment.superhero;

    //console.log(comment.checkboxes);
    // console.log(comment.checkboxes["dude_with_a_problem"]);
    // listCheckboxes["dude_with_a_problem"] =
    //   comment.checkboxes[0].dude_with_a_problem;
    // console.log("listcheckboxes");
    // console.log(listCheckboxes);
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getComment(id);
  }
  onSubmit = e => {
    e.preventDefault();
    const { id, commentText, checkboxes, movieid, user, title } = this.state;
    console.log("submitted checkboxes");
    console.log(checkboxes);
  };
  createGenreCheckboxes = () => {
    const { checkboxes } = this.state;
    console.log("genreCheckboxes");
    console.log(checkboxes);
    if (checkboxes["dude_with_a_problem"]) {
      console.log("true");
      console.log(checkboxes);
    } else console.log("false");
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

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: { ...prevState.checkboxes, [checkbox]: isSelected }
      }));
    });
  };
  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange(event) {
    const { name } = event.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, movieid, commentText, user, checkboxes, id } = this.state;
    //const { comment } = this.state;
    // console.log("comment Load");
    // console.log(comment);
    // const { title, movieid, commentText, user, checkboxes, id } = comment;
    console.log("checkboxes");
    console.log(checkboxes);
    // var listCheckboxes;
    // const objCheckboxes = {
    //   dude_with_a_problem: true,
    //   golden_fleece: true
    // };

    // console.log("objCheckboxes golden_fleece");
    // console.log(objCheckboxes);
    // if (objCheckboxes["golden_fleece"]) {
    //   console.log("golden fleece = true");
    // } else {
    //   console.log("golden fleece = false");
    // }
    // console.log(objCheckboxes["golden_fleece"]);
    // var listCheckboxes = [
    //   {
    //     dude_with_a_problem: true
    //   },
    //   { golden_fleece: true }
    // ];
    // this.setState("
    // ")
    // listCheckboxes["opening_poor"] = opening_poor;
    // listCheckboxes["premise_poor"] = premise_poor;
    // listCheckboxes["character_poor"] = character_poor;
    // listCheckboxes["dialogue_poor"] = dialogue_poor;

    // listCheckboxes["opening_good"] = opening_good;
    // listCheckboxes["premise_good"] = comment.premise_good;
    // listCheckboxes["character_good"] = comment.character_good;
    // listCheckboxes["dialogue_good"] = comment.dialogue_good;

    // listCheckboxes["dude_with_a_problem"] = dude_with_a_problem;
    // listCheckboxes["golden_fleece"] = golden_fleece;
    // // listCheckboxes["buddy_love"] = comment.buddy_love;
    // listCheckboxes["institutionalized"] = comment.institutionalized;
    // listCheckboxes["superhero"] = comment.superhero;
    console.log("render checkboxes");
    //console.log(checkboxes["dude_with_a_problem"]);
    // console.log(listCheckboxes);
    // const checkbox_dude = listCheckboxes[0].dude_with_a_problem;
    // const checkbox_golden = listCheckboxes[1].golden_fleece;

    //if (checkboxes) {
    // console.log("checkbox full");
    //console.log(checkboxes[0].dude_with_a_problem);
    // arrayCheckboxes["dude_with_a_problem"] =
    //   checkboxes[0].dude_with_a_problem;
    //} else {
    //  console.log("checkbox empty");
    //}

    return (
      <div>
        <div></div>
        <div>{title}</div>

        <div>{movieid}</div>
        <div>{commentText} </div>
        <div>{user}</div>
        <form onSubmit={this.onSubmit}>
          <div>
            {/* <input
            type="checkbox"
            id="dude_with_a_problem"
            key="dude_with_a_problem"
            onChange={this.handleCheckboxChange}
            className="form-check-input"
            name={dude_with_a_problem}
          /> */}
            {checkboxes ? this.createGenreCheckboxes() : null}
          </div>

          <div>
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
          <div class="col-sm-12">
            <TextInputGroup
              type="text"
              name="title"
              label="Title"
              value={title}
              placeHolder="Enter a title"
              onChange={this.onChange}
            />
          </div>
          <div class="col-md-3">
            <input class="btn btn-warning btn-block" type="submit" />
          </div>
        </form>
      </div>
    );
    //return <div>{<CommentEdit comment={comment} />}</div>;
  }
}
const mapStateToProps = state => ({
  comment: state.comment.comment
});

CommentEditLoad.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  getComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  getComment
})(CommentEditLoad);
