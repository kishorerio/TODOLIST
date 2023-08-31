// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
  text: String,
  isCompleted: Boolean,
});

const TodoModel = mongoose.model('Todo', TodoSchema);

// API routes
app.get('/api/todos', async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const { text, isCompleted } = req.body;
  const todo = new TodoModel({ text, isCompleted });
  await todo.save();
  res.json(todo);
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await TodoModel.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
