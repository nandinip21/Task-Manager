import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Add Task/AddTask.css";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions";
import Input from '../../atoms/Input'

const AddTask = (props) => {
  const [task, setTask] = useState({
    title: "Task Title",
    description: "Task Description",
    deadline: "5 days",
    priority: "Active",
  });

  return (
    <div>
      <form className="form-main">
        <Input
          content="Task Title:"
          name="title"
          stateTask={task}
          setStateTask={setTask}
        />
        <Input
          content="Description:"
          name="description"
          stateTask={task}
          setStateTask={setTask}
        />
        <Input
          content="Deadline:"
          name="deadline"
          stateTask={task}
          setStateTask={setTask}
        />
        <Input
          content="Priority:"
          name="priority"
          stateTask={task}
          setStateTask={setTask}
        />
        <Link to="/">
          <input
            type="submit"
            value="Create Task"
            onClick={() => props.addTask(task)}
          />
        </Link>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};
export default connect(null, mapDispatchToProps)(AddTask);
