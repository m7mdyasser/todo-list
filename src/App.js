import {  useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([
    { completed: false, text: "do the laondary" },
    { completed: false, text: "make dinner" },
  ]);
  const inputref = useRef();
  // add item
  const handleAddtodo = () => {
    const text = inputref.current.value;
    const newitem = { completed: false, text };
    if (inputref.current.value === "" || inputref.current.value === " ") {
      inputref.current.value = "";
    } else {
      settodos([...todos, newitem]);
      inputref.current.value = "";
    }
  };
// item done
  const handlitemdone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    settodos(newtodos);
  };
  // delet item
  const handleDeleteItem = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    settodos(newtodos);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="add">
            <input ref={inputref} placeholder="inter item" maxLength={40} />
            <button onClick={handleAddtodo}>add task</button>
          </div>
          
          <div className="tasks">
            {todos.map(({ text, completed }, index) => {
              return (
                <div key={index}>
                  <li
                    key={index}
                    className={completed ? "done" : ""}
                    onClick={() => handlitemdone(index)}
                  >
                    {text}
                  </li>
                  <span onClick={() => handleDeleteItem(index)}>x</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
