import React, { useState } from "react";
import { TaskList } from "./TaskList";

export const Taskform = () => {
  const [add, setAdd] = useState({});

  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("task");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!add) return;
    const oldTask = localStorage.getItem("task");
    const oT = oldTask ? JSON.parse(oldTask) : [];
    const updatedTasks = [...oT, add];
    setTask(updatedTasks);
    setAdd("");
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    alert("Data saved to localStorage!");
  };

    const onDelete = (index) => {
      console.log(index);
      const updatedTasks = task.filter((item, i) => i !== index);
      setTask(updatedTasks);
      console.log(updatedTasks);
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
      <TaskList
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </>
  );
};
