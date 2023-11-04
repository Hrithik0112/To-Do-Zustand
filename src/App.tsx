import React, { useState } from "react";
import { todostore } from "./store/todoStore";

function App() {
  const [todo, setTodo] = useState("");

  const todoState = todostore();

  const randomId = (): number => {
    const min = 1000;
    const max = 9999;
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      todoState.addTodo({
        id: randomId(),
        todo: todo,
        isDone: false,
      });

      setTodo("");
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg">
          <h1 className="font-bold text-3xl">To-Do's</h1>
          <p className="text-xl">Add Your Tasks</p>
          <form onSubmit={handleSubmit}>
            <div className=" mt-5">
              <input
                type="text"
                value={todo}
                placeholder="Enter Your Tasks"
                className="w-full h-10 p-3 outline-black border border-gray-500 rounded-lg"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </form>
          <div className="mt-5">
            {todoState.todos.length > 0 &&
              todoState.todos.map((item) => (
                <div className="w-full p-2 mt-2 border border-gray-500 flex justify-center items-center">
                  {item.todo}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
