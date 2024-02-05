import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  deleteSagaTaskFailure,
  deleteSagaTaskSuccess,
} from "../components/redux/actions";
import { DELETE_SAGA_TASK } from "../components/redux/constants";

function* onDeleteTask(action) {
  console.log("Delete Saga", action.payload);
  try {
    const res = yield call(
      axios.delete,
      `http://localhost:3000/tasks/${action.payload.id2}`
    );

    yield put(deleteSagaTaskSuccess(res.data));
  } catch (err) {
    yield put(deleteSagaTaskFailure(err));
  }
}

export function* DeleteTasksSaga() {
  yield takeLatest(DELETE_SAGA_TASK, (action) => onDeleteTask(action));
}
