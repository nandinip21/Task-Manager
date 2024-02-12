import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../Dashboard";
import { TASK_TYPES } from "../constants";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Dashboard Component", () => {
  it.only("renders View Tasks by default", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("View Tasks")).toBeInTheDocument();
  });

  it("renders Create Task when clicking the corresponding button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Create Task"));
    expect(getByText("Add Task")).toBeInTheDocument();
  });

  it("toggles between View Tasks and Create Task when clicking the buttons", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Create Task"));
    expect(screen.getByText("Add Task")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText("View Tasks")).toBeInTheDocument();
  });

  it("renders View Task when clicking on a task", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Task 1"));
    expect(screen.getByTestId("view-task")).toBeInTheDocument();
  });

  it("passes correct props to ViewTask component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Task 1"));
    expect(screen.getByTestId("view-task")).toHaveAttribute("taskid", "1");
  });
});
