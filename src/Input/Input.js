import React from "react";

export const Input = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={props.onChange}
      />
    </div>
  );
};
