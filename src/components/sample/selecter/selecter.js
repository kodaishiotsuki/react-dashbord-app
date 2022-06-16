import { selector } from "recoil";
import { todoListState } from "../atom/atom";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});
