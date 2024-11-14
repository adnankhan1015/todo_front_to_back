/*
    Todo {
    title: string,
    description: string,
    completed: boolean
    }
*/
const mongoose = require("mongoose");

// mongodb
// mongodb+srv://admin:Admin123456@cluster0.alhls.mongodb.net/
// .env
mongoose.connect(
  "mongodb+srv://admin:Admin123456@cluster0.alhls.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
