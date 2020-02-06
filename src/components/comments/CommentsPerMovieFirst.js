import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCommentsPerMovie } from "../../actions/commentActions";

class CommentsPerMovieFirst extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { movieid } = this.props;
    console.log("movieID");
    console.log(movieid);
    this.props.getCommentsPerMovie(1);
    console.log("Comments Per Movie First props.comments");
    console.log(this.props.comments);
    // this.setState({
    //   comments: this.props.comments
    // });
  }
  render() {
    const myComments = [];
    var { comments } = this.state;
    console.log("Comments PerMovie First");
    console.log(comments);
    if (comments && comments.length > 0) {
      console.log("comments is an array");
      console.log(comments);
    } else {
      console.log("comments is null");
      comments = myComments;
    }
    return (
      <React.Fragment>
        <div>test</div>
        {/* {comments.map(comment => (
          <Comment key={comment.id} commentProps={comment} />
        ))} */}
      </React.Fragment>
    );
  }
}

CommentsPerMovieFirst.propTypes = {
  comments: PropTypes.array.isRequired,
  movieid: PropTypes.number.isRequired,
  getCommentsPerMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comment.comments
});

export default connect(mapStateToProps, { getCommentsPerMovie })(
  CommentsPerMovieFirst
);
