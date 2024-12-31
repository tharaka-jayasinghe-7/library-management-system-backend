const express = require("express");
const app = express();
const cors = require("cors");
const bookController = require("./Controllers/bookController");
const userController = require("./Controllers/userController");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//books
app.get("/getBooks", (req, res) => {
  bookController.getBooks((req, res, next) => {
    res.send();
  });
});

app.post("/addBook", (req, res) => {
  bookController.addBook(req.body, (callback) => {
    res.send();
  });
});

app.put("/updateBook", (req, res) => {
  bookController.updateBook(req.body, (callback) => {
    res.send(callback);
  });
});

app.delete("/deletBook", (req, res) => {
  bookController.deleteBook(req.body, (callback) => {
    res.send(callback);
  });
});

//users
app.get("/getUsers", (req, res) => {
  userController.getUsers((req, res, next) => {
    res.send();
  });
});

app.post("/addUser", (req, res) => {
  userController.addUser(req.body, (callback) => {
    res.send();
  });
});

app.put("/updateUser", (req, res) => {
  userController.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.delete("/deleteUser", (req, res) => {
  userController.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;
