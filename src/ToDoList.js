import React from "react";

function ToDoList() {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (toDo === "") return;

    /* 
      when we use modifying function such as setToDo or setToDos
      we have two options:
      1. send value
      2. send function
      (
        In these way, first argument is current state
      )
    */

    setToDos((curArr) => [toDo, ...curArr]);
    setToDo("");
  };

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item.toUpperCase()}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
