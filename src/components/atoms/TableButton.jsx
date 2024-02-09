import React from "react";
import "../atoms/TableButton.css";
import { useDispatch } from "react-redux";
import { deleteSagaTask } from "../redux/actions";

const TableButton = ({
  btnContent,
  props,
  indexId,
  taskId,
  toggleViewTaskHandler,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (btnContent === "Delete") {
      dispatch(deleteSagaTask(indexId, taskId));
    } else {
      props.setViewTaskId(taskId);
      toggleViewTaskHandler();
    }
  };
  return <button onClick={handleClick}>{btnContent}</button>;
};

export default TableButton;
