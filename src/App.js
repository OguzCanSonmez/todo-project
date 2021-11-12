import "./App.css";
import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 0, content: "1. yapılacak", isDone: false },
  { id: 1, content: "2. yapılacak", isDone: true },
];

function App() {
  // States
  const [tasks, setTask] = useState(INITIAL_STATE);
  
  return (
    <div>
      <h1>TO DO PROJECT</h1>
      <input
        type="text"
      />
      <button>Add</button>
      <div className="items">
        {tasks.map((item) => (
          <div key={item.id} className="item">
            <div>{item.content}</div>
            <span className="del">X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
