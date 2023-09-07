import React from "react";
import "../sharedComponentsStyle/InputField.css";
export default function InputField(props) {
  return (
    <div className="input-field-holder">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        name={props.label}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        className="input-field"
      />
      {props.hint ? <div className="hint">Hint :{props.hint}</div> : null}
    </div>
  );
}
