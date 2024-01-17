import React from "react";
import PropTypes from "prop-types";

function ChildComponentProps(props) {
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Child Component</h1>
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

ChildComponentProps.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

ChildComponentProps.defaultProps = {
  name: "Guest",
  age: 20,
  isStudent: false,
};

export default ChildComponentProps;
