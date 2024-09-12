import React, { useState } from "react";

export const Taskform = () => {
  const [add, setAdd] = useState({});

  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("task");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!add) return;
    const updatedTasks = [...task, add];
    setTask(updatedTasks);
    setAdd("");
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    alert("Data saved to localStorage!");
  };

  const onDelete = (index) => {
    const updatedTasks = task.filter((item, i) => i !== index);
    setTask(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  const onToggle = (index) => {
    const updatedTasks = task.map((item, i) =>
      i === index ? { ...item, status: !item.status } : item
    );
    setTask(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          name="task"
          onChange={(e) => setAdd({ task: e.target.value, status: false })}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "60%",
                border: "1px solid black",
                justifyContent: "space-around",
              }}
            >
              <div>{item.task}</div>

              {item.status ? <p>completed</p> : <p>pending</p>}
              {/* {console.log(item, index)} */}
              <button onClick={() => onDelete(index)}>Delete</button>
              <button onClick={() => onToggle(index)}>Toggle status</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
