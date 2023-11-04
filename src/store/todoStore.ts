import { create } from "zustand";

type TodoType = {
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

export const todostore = create<States & Actions>((set) => ({
  todos: [],
  addTodo: (todo: TodoType) => set((state) => ({ todos: [todo, ...state.todos] })),
}));
