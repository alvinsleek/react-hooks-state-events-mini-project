import React from "react";

function Task() {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button onClick={()=>deletedItem(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
