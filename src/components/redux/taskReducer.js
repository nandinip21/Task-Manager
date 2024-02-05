import {
  FETCH_TASK,
  RECEIVE_TASK_SUCCESS,
  RECEIVE_TASK_FAILURE,
  ADD_TASK,
  ADD_TASK_FAILURE,
  ADD_TASK_SUCCESS,
  DELETE_SAGA_TASK,
  DELETE_SAGA_TASK_SUCCESS,
  DELETE_SAGA_TASK_FAILURE,
  EDIT_SAGA_TASK_SUCCESS,
  EDIT_SAGA_TASK_FAILURE,
  EDIT_SAGA_TASK,
} from "./constants";
import { fromJS } from "immutable";

const initialState = fromJS({
  tasks: [],
  err: null,
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return state;

    case RECEIVE_TASK_SUCCESS:
      return state.set("tasks", action.payload);

    case RECEIVE_TASK_FAILURE:
      return state.set("tasks", []);

    case ADD_TASK:
      return state;

    case ADD_TASK_SUCCESS:
      action.payload = { ...action.payload, id: state.tasks.length + 1 };
      return state;

    case ADD_TASK_FAILURE:
      return state.set("tasks", []);

    case DELETE_SAGA_TASK: {
      const newTasks = state.get("tasks").filter((task, index) => {
        return index != action.payload.id1;
      });
      return state.set("tasks", newTasks);
    }
    case DELETE_SAGA_TASK_SUCCESS:
      return state;

    case DELETE_SAGA_TASK_FAILURE:
      return state.set("tasks", []).set("err", state.get("err"));

    case EDIT_SAGA_TASK: {
      const currTask = action.payload.id2;
      const index = action.payload.id3;
      const newTasks = state.get("tasks").map((task, ind) => {
        console.log("INDEX: ", typeof ind, typeof index);
        if (ind == index) {
          return currTask;
        } else return task;
      });
      console.log("$$$", newTasks);
      return state.set("tasks", newTasks);
    }
    case EDIT_SAGA_TASK_SUCCESS:
      return state;

    case EDIT_SAGA_TASK_FAILURE:
      return state.set("tasks", []).set("err", state.get("err"));

    default:
      return state;
  }
};

export default taskReducer;
