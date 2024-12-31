const express = require("express");
const router = express.Router();
const bookController = require("./Controllers/bookController");
const userController = require("./Controllers/userController");

router.get("/getBooks", bookController.getBooks);
router.post("/addBook", bookController.addBook);
router.put("/updateBook", bookController.updateBook);
router.delete("/deleteBook", bookController.deleteBook);

router.get("/getUsers", userController.getUsers);
router.post("/addUser", userController.addUser);
router.put("/updateUser", userController.updateUser);
router.delete("/deleteUser", userController.deleteUser);

module.exports = router;
