import React from "react";
import "../UIStyle/Form.css";

export default function Form(props) {
  return (
    <>
      <div className="form-holder-inputs-section">
        <form className="form-holder" onSubmit={props.onSubmit}>
          <div className="form-holder-word">{props.formFunctionName}</div>
          {props.children}
        </form>
      </div>
    </>
  );
}
