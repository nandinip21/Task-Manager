import React from "react";

const InputComponent = (props) => {
  const name = props.name;
  const handleChange = (event) => {
    const newInput = event.target.value;
    props.setStateTask({
      ...props.stateTask,
      [name]: newInput,
    });
  };

  let inputVal;
  if (props.name == "title") inputVal = props.stateTask.title;
  if (props.name == "description") inputVal = props.stateTask.description;
  if (props.name == "deadline") inputVal = props.stateTask.deadline;
  if (props.name == "priority") inputVal = props.stateTask.priority;
  return (
    <label>
      {props.content}
      <input type="text" onChange={handleChange} value={inputVal} />
    </label>
  );
};

export default InputComponent;
