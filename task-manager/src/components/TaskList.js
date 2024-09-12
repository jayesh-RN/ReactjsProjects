import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

export const TaskList = (props) => {
    

  return (
    <>
      <ul key="tasklist">
        {props.task.map((item, index) => (
          <TaskItem
            key={index}
            task={props.task}
            item={item}
            index={index}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        ))}
      </ul>
    </>
  );
};
