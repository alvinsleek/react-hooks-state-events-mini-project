import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList() {
  return (
    <div className="tasks">
      {tasks.map((task, index)=>(
        <Task
        deletedItem={deletedItem}
        key={index}
        text={task.text}
        category={task.category}
        />
      ))}
    </div>
  );
}

export default TaskList;
