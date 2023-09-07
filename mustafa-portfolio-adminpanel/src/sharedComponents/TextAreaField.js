import React from "react";
import "../sharedComponentsStyle/TextAreaField.css";
export default function TextAreaField(props) {
  return (
    <div className="text-area-field-holder">
      <label htmlFor={props.label}>{props.label}</label>
      <textarea
        name={props.label}
        onChange={props.onChange}
        type={props.type}
        className="text-area-field"
        value={props.value}
      />
    </div>
  );
}
