const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 my-2 transition-all duration-200 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg">
      
      {/* Todo Text */}
      <span
        className={`text-lg font-medium ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {todo.title}
      </span>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        
        {/* Toggle Button */}
        <button
          onClick={() => onToggle(todo)}
          className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-200 ${
            todo.completed
              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          ✔
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(todo._id)}
          className="px-3 py-1 text-sm font-semibold text-red-700 transition-all duration-200 bg-red-100 rounded-lg hover:bg-red-200"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;