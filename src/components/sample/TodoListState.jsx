import React from 'react'
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './selecter/selecter';

const TodoListState = () => {
  const totalNum = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
    </ul>
  );
}

export default TodoListState