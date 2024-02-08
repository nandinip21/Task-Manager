import React from "react";
import { Link } from "react-router-dom";
import "../atoms/Button.css";
import { connect } from "react-redux";

const Button = (props) => {
  console.log(props.tasks);
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
