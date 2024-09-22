const Todo = require('../models/todoModel');

module.exports = {
  getTodo: async (req, res) => {
    try {
      console.log("home page");
      const todos = await Todo.find();
      console.log("🚀 ~ getTodo: ~ todos:", todos)
      res.status(200).json({ message: "hello" });
    } catch (error) {
      console.log(error);
    }
  },

  addTodo: async (req, res) => {
    try {
        console.log("something");
        res.status(200).json({
            success: true,
            data: "",
            message: "ok"
        })
        
    } catch (error) {
        console.log(error);
    }
  },
  deleteTodo: async (req, res) => {
    try {
        console.log("something");
        res.status(200).json({
            success: true,
            data: "",
            message: "ok"
        })
        
    } catch (error) {
        console.log(error);
    }
  },
  editTodo: async (req, res) => {
    try {
        console.log("something");
        res.status(200).json({
            success: true,
            data: "",
            message: "ok"
        })
        
    } catch (error) {
        console.log(error);
    }
  },
};
