import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";
import Contact from "./Contact";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col md-9">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <th width="20%">ID</th>
                  <th width="40%">TITLE</th>
                  <th width="40%">WRITER</th>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
