import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To Do": ["a", "b", "c", "d", "e", "f"],
    Doing: ["h", "x"],
    Done: ["z"],
  },
});
