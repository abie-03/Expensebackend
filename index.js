// expense tracker
//1. define functionlities 2. define endpoints
// crud-  adding a new expense -> /add-expense(post),
//view existing ones -> /get-expense (get),
//edit existing entries -> /update-expense (patch)
//and delete entries -> /delete-expense(delete)
// validation - adding a new user, validating existing user
//extra - monthly analysis
/*
Database Name - Expense Tracker
Collections - 1. Expense Details(amount, category, date)
              2. User Details (username, emailid, password)
*/
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Expense } = require("./models/schema.js");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://abiaksh03:abi030304@cluster0.j1nnznx.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0"
    );
    const port = process.env.PORT || 8000;
    app.listen(port, function () {
      console.log(`Listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("unable to establish connection");
  }
}
connectToDb();

app.get("/", function (request, response) {
  response.send("works");
});
//generally we do crud operation in the following way -- for my expense tracker application, crud operation is in expensecontroller.js

// post methods -> data is received from users then the data is added to data base
// app.post("/add-expense", async function (request, response) {
//   try {
//     await Expense.create({
//       amount: request.body.amount,
//       category: request.body.category,
//       date: request.body.date,
//     });
//     response.status(201).json({
//       status: "success",
//       message: "entry successfully added",
//     });
//   } catch (error) {
//     response.status(500).json({
//       status: "failure",
//       message: "entry not created",
//       error: error,
//     });
//   }
// });

// // get method
// app.get("/get-expense", async function (request, response) {
//   try {
//     const expenseDetails = await Expense.find();
//     response.status(200).json(expenseDetails);
//   } catch (error) {
//     response.status(500).json({
//       Status: "failue",
//       message: "Could not fetch data",
//       error: error,
//     });
//   }
// });

// //delete expense
// //: represent params -> delete based on id
// app.delete("/delete-expense/:id", async function (request, response) {
//   try {
//     await Expense.findByIdAndDelete(request.params.id);
//     response.status(200).json({
//       status: "success",
//       message: "deleted successfully",
//     });
//   } catch (error) {
//     response.status(500).json({
//       status: "failure",
//       message: "cant delete",
//       error: error,
//     });
//   }
// });

// //update (add+delete)
// app.patch("/update-expense/:id", async function (request, response) {
//   try {
//     await Expense.findByIdAndUpdate(request.params.id, {
//       amount: request.body.amount,
//       category: request.body.category,
//       date: request.body.date,
//     });
//     response.status(200).json({
//       status: "success",
//       message: "entry updated",
//     });
//   } catch (error) {
//     response.status(500).json({
//       status: "failure",
//       message: "Couldnot update entry",
//       error: error,
//     });
//   }
// });
