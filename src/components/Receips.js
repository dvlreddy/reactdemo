import React from "react";
import PropTypes from "prop-types";
import "./Receips.css";

function Receips(props) {
  return (
    <div className="receips">
      <span>{props.title}</span>
      <span>{props.publisher}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Receips;
