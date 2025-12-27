import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/add">
        <button>Add Task</button>
      </Link>
      <Link to="/">
        <button>Task List</button>
      </Link>
    </div>
  );
}

export default Navigation;
