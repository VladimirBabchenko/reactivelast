import React from "react";
import ToDoItem from "./todo-item.jsx";

export default ({ list }) => <ul>
    {list.map(val => <ToDoItem key={val.id} name={val.name} />)}
</ul>