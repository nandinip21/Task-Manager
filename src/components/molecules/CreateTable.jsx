import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CreateTable.css";
import TableButton from "../atoms/TableButton";
import { connect } from "react-redux";
import { fetchTask } from "../redux/actions";
import { memoizedSelector } from "../../selector";

const CreateTable = (props) => {
  useEffect(() => {
    props.fetchTask();
  }, [JSON.stringify(props.tasks)]);

  const taskData = props.tasks.map((t, index) => {
    return (
      <tr>
        <td>{t.title}</td>
        <td>{t.description}</td>
        <td>{t.deadline}</td>
        <td>{t.priority}</td>
        <td>
          <TableButton
            btnContent="View"
            props={props}
            taskId={index}
            toggleViewTaskHandler={props.toggleViewTaskHandler}
            indexId={t.id}
          />
        </td>
        <Link>
          <td>
            <TableButton btnContent="Delete" indexId={t.id} taskId={index} />
          </td>
        </Link>
      </tr>
    );
  });

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Days Left</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{taskData}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: memoizedSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTask: () => dispatch(fetchTask()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);
