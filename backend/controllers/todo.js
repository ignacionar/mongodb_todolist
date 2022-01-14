import Todo from "../models/Todo.js"

export const getTodos = async (req, res) => {
  const todos = await Todo.find() // ALL
  res.json({data: todos, message: 'All todos'})
}

export const createTodo = async (req, res) => {
  const { description } = req.body;
  const todo = await Todo.create({ description });

  res.json({data: todo, message: 'Successfully created Todo!'});
};

export const updateTodo = async (req, res) => {
  const { id, isCompleted } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { isCompleted }, { new: true });

  res.json({data: todo, message: 'Successfully updated Todo!'});
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({data: [], message: 'Successfully deleted Todo!'})
}