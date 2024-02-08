import React from "react";
import "../atoms/TableButton.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteSagaTask } from "../redux/actions";

const TableButton = ({
  btnContent,
  props,
  taskId,
  toggleViewTaskHandler,
  toggleDeleteTaskHandler,
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.get("tasks"));
  const handleClick = () => {
    if (btnContent === "Delete") {
      dispatch(deleteSagaTask(taskId));
    } else {
      props.setViewTaskId(taskId);
      toggleViewTaskHandler();
    }
  };
  return <button onClick={handleClick}>{btnContent}</button>;
};

export default TableButton;
