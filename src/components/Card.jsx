import React from "react";
import "./Card.css";

const Card = ({ todoName, id, handleDelete, handleEdit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="todo-name">{todoName}</div>
        <div className="buttons">
            <button onClick={() => handleEdit(id, todoName)}>📑</button>
            <button onClick={() => handleDelete(id)}>❎</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
