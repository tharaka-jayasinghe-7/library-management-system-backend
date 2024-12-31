const express = require("express");
const app = express();
const cors = require("cors");
const bookController = require("./Controllers/bookController");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

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

module.exports = app;
