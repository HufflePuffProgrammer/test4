import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../actions/contactActions";

class Contact extends Component {
  render() {
    const { id, title, writer } = this.props.contact;
    return (
      <div>
        <tr>
          <td>{id}</td>
        </tr>
        <tr>
          <td>{title}</td>
        </tr>
        <tr>
          <td>{writer}</td>
        </tr>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(mapStateToProps, { getContact })(Contact);
