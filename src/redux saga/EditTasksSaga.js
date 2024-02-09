import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  editSagaTaskFailure,
  editSagaTaskSuccess,
} from "../components/redux/actions";
import { EDIT_SAGA_TASK } from "../components/redux/constants";

function* onEditTask(action) {
  const oldTask = action.payload.id1;
  const currTask = action.payload.id2;
  try {
    const res = yield call(axios.get, ["http://localhost:3000/tasks/"]);
    const task = res.data.filter((obj) => obj.title === oldTask.title);
    const response = yield call(
      axios.put,
      [`http://localhost:3000/tasks/${task?.[0]?.id}`],
      currTask
    );
    yield put(editSagaTaskSuccess(response.data));
  } catch (err) {
    yield put(editSagaTaskFailure(err));
  }
}

export function* EditTasksSaga() {
  yield takeLatest(EDIT_SAGA_TASK, (action) => onEditTask(action));
}
