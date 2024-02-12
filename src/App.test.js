import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Task Tracker Testing", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders with NavBar", () => {
    render(<App />);
    const createTaskBtn = screen.getByRole("button", { name: /create task/i });
    const homePageTitle = screen.getByText(/task manager/i);
    expect(createTaskBtn).toBeInTheDocument();
    expect(homePageTitle).toBeInTheDocument();
  });

  it("Display of list of tasks when refreshed or reloaded", () => {
    render(<App />);
    const taskHeadingInTable = screen.getByRole("columnheader", {
      name: /task/i,
    });
    const descripitonHeadingInTable = screen.getByRole("columnheader", {
      name: /description/i,
    });
    const deadlineHeadingInTable = screen.getByRole("columnheader", {
      name: /days left/i,
    });
    const statusHeadingInTable = screen.getByRole("columnheader", {
      name: /status/i,
    });

    expect(taskHeadingInTable).toBeInTheDocument();
    expect(descripitonHeadingInTable).toBeInTheDocument();
    expect(deadlineHeadingInTable).toBeInTheDocument();
    expect(statusHeadingInTable).toBeInTheDocument();
  });

  it("working of clicking on Create Task Button", () => {
    render(<App />);
    const createTaskBtn = screen.getByRole("button", { name: /create task/i });
    fireEvent.click(createTaskBtn);
    expect(window.location.pathname).toBe("/");
    const prioirityInput = screen.getByText(/priority:/i);
    expect(prioirityInput).toBeInTheDocument();
  });

  it.skip("Creating a new Task", () => {
    const mockFuncSubmit = jest.fn();
    render(<App onSubmit={mockFuncSubmit} />);

    const createTaskBtn = screen.getByRole("button", { name: /create task/i });
    fireEvent.click(createTaskBtn);
    const inputForTitle = screen.getByRole("textbox", {
      name: /task title:/i,
    });
    fireEvent.change(inputForTitle, { target: { value: "New Task" } });
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    screen.debug(undefined, Infinity);
    const checkTitle = screen.getByText("New Task");
    expect(checkTitle).toBeInTheDocument();
  });

  it.skip("", () => {
    render(<App />);
    const viewTaskBtn = screen.getAllByRole("button", { name: /view/i });
  });
});
