import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { renderWithProvider } from "../../../../../testUtils";
import { ViewTask } from "../ViewTask";
import App from "../../../../App";
// import store from "../../../../store";

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 0,
  }),
}));

describe("ViewTask Component Testing", () => {
  var props;
  const mockEditSagaTask = jest.fn();
  const mockTasks = jest.fn();

  //   beforeEach(() => {
  //     props = {
  // tasks: {
  //   title: "Task",
  //   description: "Description",
  //   deadline: "5 days",
  //   priority: "High",
  // },
  //       editSagaTask: mockEditSagaTask,
  //     };
  //   });

  it("Render check", () => {
    const tasks = [
      {
        id: "1234",
        title: "Task",
        description: "Description",
        deadline: "5 days",
        priority: "High",
      },
    ];
    renderWithProvider({ Component: ViewTask, props: { tasks: tasks } });
    // render(<App/>)
    screen.debug();

    const displayTitle = screen.getByText(/task title:/i);
    const displayDescription = screen.getByText(/description:/i);
    const displayDeadline = screen.getByText(/deadline:/i);
    const displayPriority = screen.getByText(/priority:/i);

    expect(displayTitle).toBeInTheDocument();
    expect(displayDescription).toBeInTheDocument();
    expect(displayDeadline).toBeInTheDocument();
    expect(displayPriority).toBeInTheDocument();
  });
});
