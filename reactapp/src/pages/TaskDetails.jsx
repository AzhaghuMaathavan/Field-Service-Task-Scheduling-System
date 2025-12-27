import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const { tasks, updateStatus } = useContext(TaskContext);

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) return null;

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => updateStatus(task.id, "pending")}>Pending</button>
      <button onClick={() => updateStatus(task.id, "in progress")}>In Progress</button>
      <button onClick={() => updateStatus(task.id, "completed")}>Completed</button>
    </div>
  );
}

export default TaskDetails;
