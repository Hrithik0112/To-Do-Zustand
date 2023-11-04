import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TodoType = {
  id: number;
  todo: string;
  isDone: boolean;
};

type States = {
  todos: Array<TodoType> | [];
};

type Actions = {
  addTodo: (todo: TodoType) => void;
};

export const todostore = create<States & Actions>()(
  devtools((set) => ({
    todos: [],
    addTodo: (todo: TodoType) => set((state) => ({ todos: [todo, ...state.todos] })),
  }))
);
