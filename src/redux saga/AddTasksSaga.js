import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { addTaskFailure, addTaskSuccess } from "../components/redux/actions";
import { ADD_TASK } from "../components/redux/constants";

function* onAddTask(action) {
  try {
    const res = yield call(
      axios.post,
      ["http://localhost:3000/tasks"],
      action.payload
    );

    yield put(addTaskSuccess(res.data));
  } catch (err) {
    console.log("Payload Add", action.payload);
    yield put(addTaskFailure(err));
  }
}

export function* AddTasksSaga() {
  yield takeLatest(ADD_TASK, (action) => onAddTask(action));
}
