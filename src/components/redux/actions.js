import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASK,
  RECEIVE_TASK_SUCCESS,
  RECEIVE_TASK_FAILURE,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_SAGA_TASK,
  DELETE_SAGA_TASK_SUCCESS,
  DELETE_SAGA_TASK_FAILURE,
  EDIT_SAGA_TASK,
  EDIT_SAGA_TASK_SUCCESS,
  EDIT_SAGA_TASK_FAILURE,
} from "./constants";

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const fetchTask = () => ({
  type: FETCH_TASK,
});

export const receiveTaskSuccess = (task) => {
  return {
    type: RECEIVE_TASK_SUCCESS,
    payload: task,
  };
};

export const receiveTaskFailure = (err) => ({
  type: RECEIVE_TASK_FAILURE,
  payload: err,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (err) => ({
  type: ADD_TASK_FAILURE,
  payload: err,
});

export const deleteSagaTask = (id1) => ({
  type: DELETE_SAGA_TASK,
  payload: { id1 },
});

export const deleteSagaTaskSuccess = (task) => ({
  type: DELETE_SAGA_TASK_SUCCESS,
  payload: task,
});

export const deleteSagaTaskFailure = (err) => ({
  type: DELETE_SAGA_TASK_FAILURE,
  payload: err,
});

export const editSagaTask = (id1, id2, id3) => ({
  type: EDIT_SAGA_TASK,
  payload: { id1, id2, id3 },
});

export const editSagaTaskSuccess = (task) => ({
  type: EDIT_SAGA_TASK_SUCCESS,
  payload: task,
});

export const editSagaTaskFailure = (err) => ({
  type: EDIT_SAGA_TASK_FAILURE,
  payload: err,
});
