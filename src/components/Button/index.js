/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button className={props.color}>{props.children}</button>
    </div>
  );
}

Button.propType = {
  color: Proptypes.string
};
export default Button;
