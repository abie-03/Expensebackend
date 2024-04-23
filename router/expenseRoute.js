const express = require("express");
const {
  addNewExpense,
  getExpense,
  deleteExpense,
  updateExpense,
} = require("../controller/expensecontroller.js");
const router = express.Router();
router.post("/new", addNewExpense);
router.get("/all", getExpense);
router.delete("/delete/:id", deleteExpense);
router.patch("/update/:id", updateExpense);
module.exports = router;
