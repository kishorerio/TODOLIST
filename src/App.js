import "./App.css";
import { useState } from "react";
// import axios from "axios";


export default function App() {
  const [todo, setTodo] = useState([
    
  ]);

  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [...todo, { text: value, isCompleted: false }];
    setTodo(newtodos);
    setValue("");
  }

  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...todo];
    temp.splice(index, 1);
    setTodo(temp);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>
          <h1>TODO-LIST</h1>
          <input
            className="input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </lable>
        <button className="button">submit</button>
      </form>
      <br></br>

      {todo.map((item, i) => (
        <div className="todo" key={i} id={i}>
          {item.text}
          <button
            onClick={removeItem}
            id={i}
            type="button"
            class="close"
            className="button"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ))}
      
    </>
  );
}
