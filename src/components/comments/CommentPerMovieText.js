import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class CommentPerMovieText extends Component {
  commentGenreText = commentText => {
    const {
      dude_with_a_problem,
      golden_fleece,
      buddy_love,
      superhero,
      institutionalized
    } = commentText;
    let genreString = "";

    if (dude_with_a_problem) {
      genreString = genreString + "Dude With A Problem, ";
    }
    if (golden_fleece) {
      genreString = genreString + "Golden Fleece, ";
    }
    if (buddy_love) {
      genreString = genreString + "Buddy Love, ";
    }
    if (superhero) {
      genreString = genreString + "Superhero, ";
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
      premise_good,
      character_good,
      dialogue_good
    } = commentText;
    let charsGoodString = "";

    if (opening_good) {
      charsGoodString = charsGoodString + "Opening, ";
    }
    if (premise_good) {
      charsGoodString = charsGoodString + "Premise, ";
    }
    if (character_good) {
      charsGoodString = charsGoodString + "Character, ";
    }
    if (dialogue_good) {
      charsGoodString = charsGoodString + "Dialogue, ";
    }

    let newStr = charsGoodString.substr(0, charsGoodString.length - 2);

    return newStr;
  };

  commentCharsPoorText = commentText => {
    const {
      opening_poor,
      premise_poor,
      character_poor,
      dialogue_poor
    } = commentText;
    let charsPoorString = "";

    if (opening_poor) {
      charsPoorString = charsPoorString + "Opening, ";
    }
    if (premise_poor) {
      charsPoorString = charsPoorString + "Premise, ";
    }
    if (character_poor) {
      charsPoorString = charsPoorString + "Character, ";
    }
    if (dialogue_poor) {
      charsPoorString = charsPoorString + "Dialogue, ";
    }

    return charsPoorString.substr(0, charsPoorString.length - 2);
  };

  commentText = commentText => {
    const { comment_text } = commentText;
    return comment_text;
  };

  render() {
    const { commentText, movieid } = this.props;
    const { title, user } = commentText;
    return (
      <div>
        <div>
          <strong>{title}</strong> by User: {user}{" "}
          <small> Date: 12/26/2019</small>
        </div>

        <div>
          <strong>Genres</strong> {this.commentGenreText(commentText)}
        </div>
        <div>
          <strong>Good </strong> {this.commentCharsGoodText(commentText)}{" "}
        </div>
        <div>
          <strong>Poor</strong> {this.commentCharsPoorText(commentText)}
        </div>
        <div>
          {this.commentText(commentText)}

          <Link to={`comments/${movieid}`}>
            <i class="fas fa-angle-double-right"></i>More Comments
          </Link>
        </div>
      </div>
    );
  }
}

CommentPerMovieText.propTypes = {
  commentText: PropTypes.object.isRequired,
  movieid: PropTypes.number.isRequired
};
export default CommentPerMovieText;
