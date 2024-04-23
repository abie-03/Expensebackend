const { Expense } = require("./models/schema.js");
//post method
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
    response.status(500).json({
      status: "failure",
      message: "entry not created",
      error: error,
    });
  }
}

//get method
async function getExpense(request, response) {
  try {
    await Expense.find();
    response.status(200).json(expenseDetails);
  } catch (error) {
    response.status(500).json({
      Status: "failue",
      message: "Could not fetch data",
      error: error,
    });
  }
}

//delete method
async function deleteExpense(request, response) {
  try {
    await Expense.findByIdAndDelete(request.params.id);
    response.status(200).json({
      status: "success",
      message: "entry deleted",
    });
  } catch (error) {
    response.status(500).json({
      status: "failure",
      message: "could not delete entry",
      error: "error",
    });
  }
}

//update method
async function updateExpense(request, response) {
  try {
    await Expense.findByIdAndDelete(request.params.id, {
      amount: request.body.amount,
      category: request.body.category,
      date: request.body.date,
    });
    response.status(200).json({
      status: "success",
      message: "entry updated",
    });
  } catch (error) {
    response.status(500).json({
      status: "failure",
      message: "could not update entry",
      error: "error",
    });
  }
}
module.exports = { addNewExpense, getExpense, deleteExpense, updateExpense };
