import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task One", description: "First Task", status: "pending" },
    { id: 2, name: "Task Two", description: "Second Task", status: "completed" }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateStatus = (id, status) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
