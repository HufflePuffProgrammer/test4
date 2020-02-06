import React from "react";
import PropTypes from "prop-types";

function Checkbox({ genre_id, label, isSelected, onCheckboxChange }) {
  return (
    <React.Fragment>
      <div className="form-check">
        <label htmlFor={label} className="form-check-label">
          <input
            type="checkbox"
            id={genre_id}
            key={genre_id}
            onChange={onCheckboxChange}
            checked={isSelected}
            className="form-check-input"
            name={genre_id}
          />
          {label}
        </label>
      </div>
    </React.Fragment>
  );
}
Checkbox.propTypes = {
  isSelected: PropTypes.bool.isRequired
};
Checkbox.defaultProps = {
  isSelected: false
};
export default Checkbox;
