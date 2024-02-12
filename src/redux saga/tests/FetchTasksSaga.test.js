import { onFetchTask } from "../FetchTasksSaga";
import { runSaga } from "redux-saga"; //assertions based on a fake store

describe("Fetch Tasks Saga Testing", () => {
  test("", async () => {
    const dispatchedActions = [];

    const mockedTasks = [
      {
        tasks: {
          title: "Task",
          description: "Description",
          deadline: "5 days",
          priority: "High",
        },
      },
    ];
    // onFetchTask=jest.fn(()=>Promise.resolve(mockedTasks));
    const fakeStore = {
      dispatch: (action) => {
        dispatchedActions.push(action);
      },
      getState: () => {
        return {
          tasks: {
            title: "Task",
            description: "Description",
            deadline: "5 days",
            priority: "High",
          },
        };
      },
    };

    // await runSaga(fakeStore, onFetchTask).done;
    // console.log("Fetching!!!!", dispatchedActions);
  });
});
