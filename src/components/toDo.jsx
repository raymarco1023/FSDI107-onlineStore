import "./toDo.css";
import { useState } from "react";

const ToDo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    let allTodos = [...list];
    allTodos.push(text);
    setList(allTodos);

    let allTodos = list;
    allTodos.push(text);
    setList(allTodos);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="toDo-page">
      <h4>My Shopping List</h4>

      <input onChange={handleText} type="text" />
      <button onClick={handleAdd} className="btn btn-sm btn-primary">
        Add
      </button>

      <div className="todo-list"></div>
      {list.map((todo) => (
        <h6 key={todo}>{todo}</h6>
      ))}
    </div>
  );
};

export default ToDo;
