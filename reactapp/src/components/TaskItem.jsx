import React from "react";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  return (
    <div>
      <p>{task.name} - {task.status}</p>
      <Link to={`/task/${task.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default TaskItem;
