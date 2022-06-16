import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atom/atom';

const TodoItemCreator = () => {
  const [title, setTitle] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  let id = 1;
  function getId() {
    return id++;
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };
  return (
    <div style={{ margin: "1em 0" }}>
      <input type='text' value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator