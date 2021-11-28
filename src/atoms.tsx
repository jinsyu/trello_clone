import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: { todo: ["a", "b", "c", "d", "e", "f"], doing: [], done: [] },
});
