const express = require("express");
const router = express.Router();
const bookController = require("./Controllers/bookController");
const userController = require("./Controllers/userController");
const BorrowingController = require("./Controllers/borrowingController");

router.get("/getBooks", bookController.getBooks);
router.post("/addBook", bookController.addBook);
router.put("/updateBook", bookController.updateBook);
router.delete("/deleteBook", bookController.deleteBook);

router.get("/getUsers", userController.getUsers);
router.post("/addUser", userController.addUser);
router.put("/updateUser", userController.updateUser);
router.delete("/deleteUser", userController.deleteUser);

router.get("/getBorrowings", BorrowingController.getBorrowings);
router.post("/addBorrowing", BorrowingController.addBorrowing);
router.put("/updateBorrowing", BorrowingController.updateBorrowing);
router.delete("/deleteBorrowing", BorrowingController.deleteBorrowing);

module.exports = router;
