import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // empty prevent
    onAdd(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 bg-white border border-gray-100 shadow-md rounded-xl"
    >
      {/* Input */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-2 text-gray-700 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />

      {/* Button */}
      <button
        type="submit"
        className="px-5 py-2 font-semibold text-white transition-all duration-200 bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 active:scale-95"
      >
        Add +
      </button>
    </form>
  );
};

export default TodoForm;