import React from "react";
import "../atoms/Button.css";
import { connect } from "react-redux";

export const Button = (props) => {
  return (
    <div>
      <button
        className="create-btn"
        onClick={() => {
          props.toggleCreateTaskHandler();
        }}
      >
        Create Task
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.get("tasks"),
  };
};

export default connect(mapStateToProps, null)(Button);
