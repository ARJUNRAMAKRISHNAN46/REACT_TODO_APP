const express = require("express");
const {
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express();

router.route("/getTodo").get(getTodo);
router.route("/addTodo").post(addTodo);
router.route("/editTodo").put(editTodo);
router.route("/deleteTodo").delete(deleteTodo);

module.exports = router;
