import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AddTask } from "../AddTask";
import Dashboard from "../../Dashboard/Dashboard";
import { renderWithProvider } from "../../../../../testUtils";
import { addTask } from "../../../redux/actions";

const mockStore = configureMockStore();
const store = mockStore({});

const mockOnClick = jest.fn();

describe("AddTask Component Testing", () => {
  it("Render Check", () => {
    renderWithProvider({
      Component: AddTask,
      props: { onClick: mockSubmitClickFunc },
    });
    const displayTitle = screen.getByText(/task title:/i);
    const displayDescription = screen.getByText(/description:/i);
    const displayDeadline = screen.getByText(/deadline:/i);
    const displayPriority = screen.getByText(/priority:/i);

    expect(displayTitle).toBeInTheDocument();
    expect(displayDescription).toBeInTheDocument();
    expect(displayDeadline).toBeInTheDocument();
    expect(displayPriority).toBeInTheDocument();

    // let createTaskBtn = screen.getByRole("button", {
    //   name: /create task/i,
    // });
    // expect(createTaskBtn).toBeInTheDocument();

    // fireEvent.click(createTaskBtn);

    // expect(mockSubmitClickFunc).toHaveBeenCalledWith({
    //   title: "Task Title",
    //   description: "Task Description",
    //   deadline: "5 days",
    //   priority: "Active",
    // });
  });

  it("Testing input changes in the form", () => {
    renderWithProvider({ Component: AddTask });

    const inputTitle = screen.getByRole("textbox", { name: /task title:/i });
    const inputDescription = screen.getByRole("textbox", {
      name: /description:/i,
    });
    const inputDeadline = screen.getByRole("textbox", { name: /deadline:/i });
    const inputPriority = screen.getByRole("textbox", { name: /priority:/i });

    fireEvent.change(inputTitle, { target: { value: "New Task" } });
    fireEvent.change(inputDescription, { target: { value: "Task Info" } });
    fireEvent.change(inputDeadline, { target: { value: "10 days" } });
    fireEvent.change(inputPriority, { target: { value: "Active" } });

    expect(inputTitle.value).toBe("New Task");
    expect(inputDescription.value).toBe("Task Info");
    expect(inputDeadline.value).toBe("10 days");
    expect(inputPriority.value).toBe("Active");
  });

  it("should navigate to the correct url upon clicking the Create Task", () => {
    renderWithProvider({ Component: AddTask, props: { addTask } });
    let createTaskBtn = screen.getByRole("button", {
      name: /create task/i,
    });
    fireEvent.click(createTaskBtn);
    expect(window.location.pathname).toBe("/");
  });

  it("should update the input fields when values change", () => {
    renderWithProvider({ Component: AddTask });
    const inputForTitle = screen.getByRole("textbox", {
      name: /task title:/i,
    });
    fireEvent.change(inputForTitle, { target: { value: "Task 1" } });
    expect(inputForTitle.value).toEqual("Task 1");
  });

  // it.skip("Should create a new task", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  {
    /* <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    let createTaskBtn = screen.getByRole("button", {
      name: /create task/i,
    });
    fireEvent.click(createTaskBtn);
    const displayContent = screen.getByRole("cell", {
      name: /5 days/i,
    });
  });

  it.skip("should dispatch an action when Submit button is clicked", async () => {
    renderWithProvider({ Component: AddTask });

    const button = screen.getByValue("Create Task");
    fireEvent.click(button);

    await waitFor(() =>
      expect(store.getActions()).toEqual([
        { type: "ADD_TASK", payload: expect.anything() },
      ])
    );
  }); */
  }
});
