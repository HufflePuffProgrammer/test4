import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getContact, updateContact } from "../../actions/contactActions";

class ContactEdit extends Component {
  state = {
    id: "",
    title: "",
    writer: "",

    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { title, writer } = nextProps.contact;
    this.setState({
      title,
      writer
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.getContact(id);
  }

  onSubmit = e => {
    e.preventDefault();
    const { title, writer, errors } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (writer === "") {
      this.setState({ errors: { writer: "Writer is required" } });
      return;
    }
    const { id } = this.props.match.params;

    const updContact = {
      id,
      title,
      writer
    };
    this.props.updateContact(updContact);

    //clear fields
    this.setState({
      title: "",
      writer: "",

      errors: {}
    });
    //this.props.history.push(`/movie/detail/${id}`);
    this.props.history.push("/contacts");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, writer, errors } = this.state;

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
                  <i class="fas fa-film"></i> Contact Edit
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
                        name="writer"
                        label="Writer"
                        value={writer}
                        placeHolder="Enter the Writer"
                        onChange={this.onChange}
                        error={errors.writer}
                      />
                      <section id="actions" class="py-4 mb-4 bg-light">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <Link
                                to="/contacts"
                                class="btn btn-light btn-block"
                              >
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
ContactEdit.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contact: state.contact.contact
});
export default connect(mapStateToProps, { getContact, updateContact })(
  ContactEdit
);
