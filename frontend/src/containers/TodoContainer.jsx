import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../services/todoService";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Load todos */
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.log("Error loading todos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /* Add */
  const handleAdd = async (title) => {
    try {
      await createTodo({ title });
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  /* Delete */
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  /* Toggle */
  const handleToggle = async (todo) => {
    try {
      await updateTodo(todo._id, {
        completed: !todo.completed,
      });
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          🚀 Todo App
        </h1>

        {/* Form */}
        <TodoForm onAdd={handleAdd} />

        {/* Loading */}
        {loading && (
          <p className="mt-4 text-center text-gray-500">Loading todos...</p>
        )}

        {/* Empty State */}
        {!loading && todos.length === 0 && (
          <p className="mt-6 text-center text-gray-400">
            No todos yet. Add one ✍️
          </p>
        )}

        {/* Todo List */}
        <div className="mt-6 space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
