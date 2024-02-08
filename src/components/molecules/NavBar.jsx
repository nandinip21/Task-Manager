import React from "react";
import "./NavBar.css";
import Button from "../atoms/Button";

const NavBar = ({ toggleCreateTaskHandler }) => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-bar-title">Task Manager</li>
        <li>
          <Button toggleCreateTaskHandler={toggleCreateTaskHandler} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
