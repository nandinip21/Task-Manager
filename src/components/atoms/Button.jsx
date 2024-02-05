import React from "react";
import { Link } from "react-router-dom";
import '../atoms/Button.css';
import { connect } from "react-redux";

const Button = (props) => {
  console.log(props.tasks);
  return (
    <div>
      <Link to={`/add-task/${props.tasks.length}`}>
        <button className="create-btn">Create Task</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.get("tasks"),
  };
};

export default connect(mapStateToProps, null)(Button);
