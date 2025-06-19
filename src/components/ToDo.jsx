import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const ToDo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const [filter, setFilter] = useState("all"); // options: all, completed, incomplete

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "completed") return todo.isComplete;
    if (filter === "incomplete") return !todo.isComplete;
    return true; // for "all"
  });

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-2xl">
      {/* Title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6  pr-6 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* Status */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="h-6 px-3 py-1 rounded bg-gray-300 flex items-center"
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className=" h-6 px-3 py-1 rounded bg-green-500 flex items-center"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="h-6 px-3 py-1 rounded bg-red-400 flex items-center"
        >
          Incomplete
        </button>
      </div>

      {/* To do list */}
      <div>
        {filteredTodos.map((item) => (
  <TodoItems
    key={item.id}
    text={item.text}
    id={item.id}
    isComplete={item.isComplete}
    deleteTodo={deleteTodo}
    toggle={toggle}
    filter={filter} // pass filter here
  />
))}

      </div>
    </div>
  );
};

export default ToDo;
