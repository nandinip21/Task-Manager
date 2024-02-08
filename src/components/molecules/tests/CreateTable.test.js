import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { renderWithProvider } from "../../../../../testUtils";
import ViewTask from "../ViewTask";
// import store from "../../../../store";

const mockStore = configureMockStore();
const store = mockStore({});