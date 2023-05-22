import React, { useState } from 'react';

const TodoList = ({ list, remove }) => {
  const [taskStatus, setTaskStatus] = useState(Array(list.length).fill('not-done'));

  const toggleTaskStatus = (index) => {
    const updatedStatus = [...taskStatus];
    updatedStatus[index] = updatedStatus[index] === 'not-done' ? 'done' : 'not-done';
    setTaskStatus(updatedStatus);
  };

  if (list.length > 0) {
    return (
      <ul className="todo-list">
        {list.map((entry, index) => (
          <div className="todo" key={index}>
            <li
              className={taskStatus[index]}
              key={index}
              onClick={() => toggleTaskStatus(index)}
            >
              {entry}
            </li>

            <button className="delete-button" onClick={() => remove(entry)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
  }

  return (
    <div className="empty">
      <p>No tasks found</p>
    </div>
  );
};

export default TodoList;