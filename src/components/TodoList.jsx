import React, { useState } from "react";
import "./TodoList.css";
import Card from "./Card";

const TodoList = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(-1);

  const handleClick = () => {
    if (edit > -1) {
      const newArr = [...list];
      newArr[edit] = state;
      setList(newArr);
      setEdit(-1);
    } else {
      setList((prev) => [...prev, state]);
    }
    setState("");
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleEdit = (id, name) => {
    setState(name);
    setEdit(id);
  };

  const handleDelete = (id) => {
    setList(list.filter((item, index) => index != id));
  };

  const printTodoCards = list.map((item, index) => (
    <Card
      todoName={item}
      key={index}
      id={index}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ));

  return (
    <>
      <div className="container">
        <div className="main-div">
          <div className="header">
            <h1>ToDo List</h1>
          </div>
          <div className="input-form">
            <div className="input-div">
              <input type="text" value={state} onChange={handleChange}></input>
            </div>
            <div className="add-item" onClick={handleClick}>
              <h1>+</h1>
            </div>
          </div>
          {printTodoCards}
        </div>
      </div>
    </>
  );
};

export default TodoList;
