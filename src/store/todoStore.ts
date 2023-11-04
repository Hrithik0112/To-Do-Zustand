import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo: TodoType) => set((state) => ({ todos: [todo, ...state.todos] })),
      }),
      { name: "todoStore" }
    )
  )
);
