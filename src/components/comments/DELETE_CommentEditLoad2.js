import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentEdit from "./CommentEdit";
import { getComment } from "../../actions/commentActions";

class CommentEditLoad extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { comment } = nextProps;
    var listCheckboxes = [];
    listCheckboxes["opening_poor"] = comment.opening_poor;
    listCheckboxes["premise_poor"] = comment.premise_poor;
    listCheckboxes["character_poor"] = comment.character_poor;
    listCheckboxes["dialogue_poor"] = comment.dialogue_poor;

    listCheckboxes["opening_good"] = comment.opening_good;
    listCheckboxes["premise_good"] = comment.premise_good;
    listCheckboxes["character_good"] = comment.character_good;
    listCheckboxes["dialogue_good"] = comment.dialogue_good;

    listCheckboxes["dude_with_a_problem"] = comment.dude_with_a_problem;
    listCheckboxes["golden_fleece"] = comment.golden_fleece;
    listCheckboxes["buddy_love"] = comment.buddy_love;
    listCheckboxes["institutionalized"] = comment.institutionalized;
    listCheckboxes["superhero"] = comment.superhero;

    console.log("listcheckboxes");
    console.log(listCheckboxes);
    console.log("title");
    console.log(comment.title);
    this.setState({
      comment: comment
    });
    //   movieid: "",
    //   title: "",
    //   user: "",
    //   commentText: "",
    //   checkboxes: []
    // });
    // this.setState({
    //   id: comment.id,
    //   movieid: comment.movieid,
    //   title: comment.title,
    //   user: comment.user,
    //   commentText: comment.comment_text,
    //   checkboxes: listCheckboxes
    // });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("component Did Mount id");
    this.props.getComment(id);
  }

  render() {
    const { comment } = this.props;
    console.log("comment Load");
    console.log(comment);
    return <div></div>;
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
