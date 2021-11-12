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

  // Is task completed or not
  const updateItem = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  // Delete item from todo list
  const deleteItem = (item) => {
    setTask(tasks.filter((el) => el.id !== item.id));
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
          <div key={item.id} className={item.isDone ? "item ok" : "item"}>
            <div onClick={() => updateItem(item.id)}>{item.content}</div>
            <span className="del" onClick={() => deleteItem(item)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
