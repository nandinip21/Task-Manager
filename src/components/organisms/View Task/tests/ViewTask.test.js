// import React from "react";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import "@testing-library/jest-dom";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import { renderWithProvider } from "../../../../../testUtils";
// import { ViewTask } from "../ViewTask";

// const mockStore = configureMockStore();
// const store = mockStore({});

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: () => ({
//     id: 0,
//   }),
// }));

// describe("ViewTask Component Testing", () => {
//   var props;
//   const mockEditSagaTask = jest.fn();
//   const mockTasks = jest.fn();

//   //   beforeEach(() => {
//   //     props = {
//   // tasks: {
//   //   title: "Task",
//   //   description: "Description",
//   //   deadline: "5 days",
//   //   priority: "High",
//   // },
//   //       editSagaTask: mockEditSagaTask,
//   //     };
//   //   });
//   const tasks = [
//     {
//       id: "1234",
//       title: "Task",
//       description: "Description",
//       deadline: "5 days",
//       priority: "High",
//     },
//   ];
//   it("Render check", () => {
//     renderWithProvider({
//       Component: ViewTask,
//       props: { tasks: tasks },
//     });

//     const displayTitle = screen.getByText(/task title:/i);
//     const displayDescription = screen.getByText(/description:/i);
//     const displayDeadline = screen.getByText(/deadline:/i);
//     const displayPriority = screen.getByText(/priority:/i);

//     expect(displayTitle).toBeInTheDocument();
//     expect(displayDescription).toBeInTheDocument();
//     expect(displayDeadline).toBeInTheDocument();
//     expect(displayPriority).toBeInTheDocument();

//   });

//   it("Input changing correctly", () => {
//     renderWithProvider({ Component: ViewTask, props: { tasks: tasks } });

//     const titleInput = screen.getByRole("textbox", {
//       name: /task title:/i,
//     });
//     const descriptionInput = screen.getByRole("textbox", {
//       name: /description:/i,
//     });
//     const deadlineInput = screen.getByRole("textbox", {
//       name: /deadline:/i,
//     });
//     const priorityInput = screen.getByRole("textbox", {
//       name: /priority:/i,
//     });

//     fireEvent.change(titleInput, { target: { value: "New Task" } });
//     fireEvent.change(descriptionInput, { target: { value: "Finish Tasks" } });
//     fireEvent.change(deadlineInput, { target: { value: "10 days" } });
//     fireEvent.change(priorityInput, { target: { value: "Active" } });

//     // const editTaskBtn = screen.getByRole("button", {
//     //   name: /edit task/i,
//     // });
//     // fireEvent.click(editTaskBtn);
//   });
// });
