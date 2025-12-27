import React, { useState } from "react";

export default function App() {
  const [view, setView] = useState("list");
  const [selected, setSelected] = useState(null);

  const [tasks, setTasks] = useState([
    { id: 1, name: "Task One", description: "First Task", status: "pending" },
    { id: 2, name: "Task Two", description: "Second Task", status: "completed" }
  ]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <h1>Task Management</h1>

      <button onClick={() => { setView("add"); setSelected(null); }}>
        Add Task
      </button>
      <button onClick={() => { setView("list"); setSelected(null); }}>
        Task List
      </button>

      {view === "list" && !selected && (
        <div>
          {tasks.map(task => (
            <div key={task.id}>
              <p>{task.name} - {task.status}</p>
              <button onClick={() => setSelected(task)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {view === "add" && (
        <div>
          <input
            placeholder="Task Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Description"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button
            onClick={() => {
              setTasks([
                ...tasks,
                {
                  id: tasks.length + 1,
                  name,
                  description: desc,
                  status: "pending"
                }
              ]);
              setName("");
              setDesc("");
              setView("list");
            }}
          >
            Add
          </button>
        </div>
      )}

      {selected && (
        <div>
          <h2>Task Details</h2>
          <p>Name: {selected.name}</p>
          <p>Description: {selected.description}</p>
          <p>Current: {selected.status}</p>

          <button onClick={() => {
            selected.status = "pending";
            setSelected({ ...selected });
          }}>
            Pending
          </button>

          <button onClick={() => {
            selected.status = "in progress";
            setSelected({ ...selected });
          }}>
            In Progress
          </button>

          <button onClick={() => {
            selected.status = "completed";
            setSelected({ ...selected });
          }}>
            Completed
          </button>
        </div>
      )}
    </div>
  );
}
