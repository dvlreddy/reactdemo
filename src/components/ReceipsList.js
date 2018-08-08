import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Receips from "./Receips";

function ReceipsList(props) {
  return (
    <div>{props.Receips.map(c => <Receips publisher={c.publisher} title={c.title} />)}</div>
  );
}

ReceipsList.propTypes = {
  Receips: PropTypes.array.isRequired
};

export default ReceipsList;
