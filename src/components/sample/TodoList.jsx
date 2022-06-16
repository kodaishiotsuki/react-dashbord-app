import React from "react";

import { useRecoilValue } from "recoil";
import { todoListState } from "./atom/atom";
import TodoItemCreator from "./TodoItemCreator";
import TodoListState from "./TodoListState";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListState />
      <TodoItemCreator />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default TodoList;
