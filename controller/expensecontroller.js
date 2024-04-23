const Expense = require("../models/schema.js");

// Post method - Add new expense
async function addNewExpense(request, response) {
  try {
    await Expense.create({
      amount: request.body.amount,
      category: request.body.category,
      date: request.body.date,
    });
    response.status(201).json({
      status: "success",
      message: "entry successfully added",
    });
  } catch (error) {
    console.error("Error adding new expense:", error);
    response.status(500).json({
      status: "failure",
      message: "entry not created",
      error: error.message, // Return only the error message for security reasons
    });
  }
}

// Get method - Retrieve all expenses
async function getExpense(request, response) {
  try {
    const expenseDetails = await Expense.find();
    response.status(200).json(expenseDetails);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    response.status(500).json({
      status: "failure",
      message: "Could not fetch data",
      error: error.message,
    });
  }
}

// Delete method - Delete an expense
async function deleteExpense(request, response) {
  try {
    await Expense.findByIdAndDelete(request.params.id);
    response.status(200).json({
      status: "success",
      message: "entry deleted",
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    response.status(500).json({
      status: "failure",
      message: "could not delete entry",
      error: error.message,
    });
  }
}

// Update method - Update an expense
async function updateExpense(request, response) {
  try {
    await Expense.findByIdAndUpdate(request.params.id, {
      amount: request.body.amount,
      category: request.body.category,
      date: request.body.date,
    });
    response.status(200).json({
      status: "success",
      message: "entry updated",
    });
  } catch (error) {
    console.error("Error updating expense:", error);
    response.status(500).json({
      status: "failure",
      message: "could not update entry",
      error: error.message,
    });
  }
}

module.exports = { addNewExpense, getExpense, deleteExpense, updateExpense };
