import React, { Fragment, useState } from "react";
import NavBar from "../../molecules/NavBar";
import CreateTable from "../../molecules/CreateTable";
import { TASK_TYPES } from "./constants";
import AddTask from "../Add Task/AddTask";
import ViewTask from "../View Task/ViewTask";

const Dashboard = (props) => {
  const [taskType, setTaskType] = useState(TASK_TYPES.VIEW_TASKS);
  const [viewTaskId, setViewTaskId] = useState(null);
  const toggleCreateTaskHandler = () => {
    setTaskType((taskType) =>
      taskType === TASK_TYPES.VIEW_TASKS
        ? TASK_TYPES.CREATE_TASK
        : TASK_TYPES.VIEW_TASKS
    );
  };

  const toggleViewTaskHandler = () => {
    setTaskType((taskType) =>
      taskType === TASK_TYPES.VIEW_TASKS
        ? TASK_TYPES.VIEW_TASK
        : TASK_TYPES.VIEW_TASKS
    );
  };
  // const toggleDeleteTaskHandler = () => {
  //   setTaskType((taskType) =>
  //     taskType === TASK_TYPES.DELETE_TASK
  //     && TASK_TYPES.DELETE_TASK
  //   );
  // }
  
  return (
    <Fragment>
      {taskType === TASK_TYPES.VIEW_TASKS && (
        <Fragment>
          <NavBar toggleCreateTaskHandler={toggleCreateTaskHandler} />
          <CreateTable setViewTaskId={setViewTaskId} toggleViewTaskHandler={toggleViewTaskHandler} />
        </Fragment>
      )}
      {taskType === TASK_TYPES.VIEW_TASK && <ViewTask viewTaskId={viewTaskId} toggleViewTaskHandler={toggleViewTaskHandler} />}
      {taskType === TASK_TYPES.CREATE_TASK && (
        <AddTask toggleCreateTaskHandler={toggleCreateTaskHandler} />
      )}

    </Fragment>
  );
};

export default Dashboard;
