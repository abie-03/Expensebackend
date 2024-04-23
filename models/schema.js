const mongoose = require("mongoose");
//defining schema for expense details
const expenseDetailsSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    category: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  { versionKey: false }
);
//creating a model
const Expense = mongoose.model("ExpenseDetails", expenseDetailsSchema);

//defining schema for user details
// const userDetailsSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
// });
// //creating a model
// const User = mongoose.model("UserDetails", userDetailsSchema);

//export
module.exports = { Expense };
