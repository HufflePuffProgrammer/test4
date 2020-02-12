import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CommentSearchDetail extends Component {
  commentGenreText = commentText => {
    const {
      superhero,
      dude_with_a_problem,
      golden_fleece,
      fool_triumphant,
      buddy_love,
      institutionalized
    } = commentText;
    let genreString = "";

    if (superhero) {
      genreString = genreString + "Superhero, ";
    }
    if (dude_with_a_problem) {
      genreString = genreString + "Dude with a problem, ";
    }
    if (golden_fleece) {
      genreString = genreString + "Golden Fleece, ";
    }
    if (fool_triumphant) {
      genreString = genreString + "Fool Triumphant, ";
    }
    if (buddy_love) {
      genreString = genreString + "Buddy Love, ";
    }
    if (institutionalized) {
      genreString = genreString + "Institutionalized, ";
    }

    let newStr = genreString.substr(0, genreString.length - 2);

    return newStr;
  };

  commentCharsGoodText = commentText => {
    const {
      opening_good,
      character_good,
      dialogue_good,
      premise_good
    } = commentText;
    let charsGoodString = "";

    if (opening_good) {
      charsGoodString = charsGoodString + "Opening, ";
    }
    if (character_good) {
      charsGoodString = charsGoodString + "Character, ";
    }
    if (dialogue_good) {
      charsGoodString = charsGoodString + "Dialogue, ";
    }
    if (premise_good) {
      charsGoodString = charsGoodString + "Premise, ";
    }

    let newStr = charsGoodString.substr(0, charsGoodString.length - 2);

    return newStr;
  };

  commentCharsPoorText = commentText => {
    const {
      opening_poor,
      character_poor,
      dialogue_poor,
      premise_poor
    } = commentText;
    let charsPoorString = "";

    if (opening_poor) {
      charsPoorString = charsPoorString + "Opening, ";
    }
    if (character_poor) {
      charsPoorString = charsPoorString + "Character, ";
    }
    if (dialogue_poor) {
      charsPoorString = charsPoorString + "Dialogue, ";
    }
    if (premise_poor) {
      charsPoorString = charsPoorString + "Premise, ";
    }

    let newStr = charsPoorString.substr(0, charsPoorString.length - 2);

    return newStr;
  };

  commentText = commentText => {
    const { comment_text } = commentText;

    return comment_text;
  };

  render() {
    const { comment, movieid } = this.props;
    const { title, checkboxes } = comment;

    return (
      <tbody>
        <tr>
          <td>
            <div className="row">
              <div className="col">
                <strong>{title}</strong> User: <small>12/26/2019</small>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small className="text-muted">Genre: </small>
                {this.commentGenreText(checkboxes)}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <small className="mr-1 text-muted">Good:</small>{" "}
                {this.commentCharsGoodText(checkboxes)}{" "}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small className="mr-1 text-muted">Poor:</small>{" "}
                {this.commentCharsPoorText(checkboxes)}
              </div>
            </div>
            <div className="row">
              <div className="col">{this.commentText(comment)}</div>
            </div>
          </td>
          <div className="row">
            <Link to={`movie/detail/${movieid}`}>Movie</Link>
          </div>
        </tr>
      </tbody>
    );
  }
}

CommentSearchDetail.propTypes = {
  comment: PropTypes.object.isRequired,
  movieid: PropTypes.number.isRequired
};
export default CommentSearchDetail;
