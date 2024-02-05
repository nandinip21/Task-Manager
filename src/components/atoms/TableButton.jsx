import React from "react";
import "../atoms/TableButton.css";
import { useDispatch } from "react-redux";
import { deleteSagaTask } from "../redux/actions";

const TableButton = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (props.btnContent === "Delete") {
      dispatch(deleteSagaTask(props.indexId, props.taskId));
    }
  };
  return <button onClick={handleClick}>{props.btnContent}</button>;
};

export default TableButton;
