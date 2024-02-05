import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/organisms/Dashboard/Dashboard";
import ViewTask from './components/organisms/View Task/ViewTask';
import AddTask from './components/organisms/Add Task/AddTask';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/view-task/:id" element={<ViewTask />} />
            <Route path="/add-task/:id" element={<AddTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
