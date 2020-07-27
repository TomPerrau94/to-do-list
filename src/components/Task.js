import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ tasks, handleCheckBox, handleTrash }) => {
  return (
    <ul className="tasks">
      {tasks.map((item, index) => {
        return (
          <li key={index} className="task">
            <input
              type="checkbox"
              name="check"
              onChange={() => {
                handleCheckBox(index);
              }}
            />
            <span className={item.isDone ? "taskDone" : null}>{item.name}</span>
            <button
              type="button"
              onClick={() => {
                handleTrash(index);
              }}
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Task;
