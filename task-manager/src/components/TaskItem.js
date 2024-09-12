import React from "react";

const TaskItem = (props) => {
  return (
    <>
      <li>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "60%",
            border: "1px solid black",
            justifyContent: "space-around",
          }}
        >
          <div>{props.item.task}</div>

          {props.item.status ? <p>completed</p> : <p>pending</p>}
          {/* {console.log(item, index)} */}
          <button onClick={() => props.onDelete(props.index)}>Delete</button>
          <button onClick={() => props.onToggle(props.index)}>
            Toggle status
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
