import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editSagaTask } from "../../redux/actions";
import { Link } from "react-router-dom";
import Input from "../../atoms/Input";

export const ViewTask = (props) => {
  const id = props.viewTaskId;
  console.log('****hash',props.tasks, id, '***tasks', props.tasks);
  const [row, setRow] = useState({
    title: props?.tasks?.[id]?.title,
    description: props?.tasks?.[id]?.description,
    deadline: props?.tasks?.[id]?.deadline,
    priority: props?.tasks?.[id]?.priority,
  });
  const oldTask = props.tasks[id];

  return (
    <div>
      <form className="form-main">
        <Input
          content="Task Title:"
          name="title"
          stateTask={row}
          setStateTask={setRow}
        />
        <Input
          content="Description:"
          name="description"
          stateTask={row}
          setStateTask={setRow}
        />
        <Input
          content="Deadline:"
          name="deadline"
          stateTask={row}
          setStateTask={setRow}
        />
        <Input
          content="Priority:"
          name="priority"
          stateTask={row}
          setStateTask={setRow}
        />

        <Link to="/">
          <input
            type="submit"
            value="Edit Task"
            onClick={() => {
              props.editSagaTask(oldTask, row, id);
              props.toggleViewTaskHandler();
            }}
          />
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.get("tasks"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editSagaTask: (oldTask, row, id) =>
      dispatch(editSagaTask(oldTask, row, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);
