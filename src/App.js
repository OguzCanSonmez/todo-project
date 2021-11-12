import "./App.css";
import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 0, content: "1. yapılacak", isDone: false },
  { id: 1, content: "2. yapılacak", isDone: true },
];

function App() {
  // States
  const [tasks, setTask] = useState(INITIAL_STATE);
  const [newTask, setNewTask] = useState(""); // State for saving temporary input

  // Adding new todo item
  const addNew = (text) => {
    if (text !== "") {
      setTask([...tasks, { id: Date.now(), content: text, isDone: false }]);
      setNewTask("");
    } else {
      alert("Empty value cant be inserted");
    }
  };

  return (
    <div>
      <h1>TO DO PROJECT</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => addNew(newTask)}>Add</button>
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
