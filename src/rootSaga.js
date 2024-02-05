import { AddTasksSaga } from "./redux saga/AddTasksSaga";
import { DeleteTasksSaga } from "./redux saga/DeleteTasksSaga";
import { EditTasksSaga } from "./redux saga/EditTasksSaga";
import { fetchTasksSaga } from "./redux saga/FetchTasksSaga";
import {all} from 'redux-saga/effects';
export function* rootSaga(){
    yield all(
        [
            fetchTasksSaga(),
            AddTasksSaga(),
            DeleteTasksSaga(),
            EditTasksSaga(),
        ]
    )
}