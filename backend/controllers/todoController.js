import Todo from "../models/Todo.js";

/* CREATE TODO */
export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET ALL TODOS */
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* UPDATE TODO */
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* DELETE TODO */
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted ✅" });
  } catch (err) {
    res.status(500).json(err);
  }
};