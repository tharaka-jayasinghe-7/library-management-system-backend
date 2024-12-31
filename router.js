const express = require("express");
const router = express.Router();
const bookController = require("./Controllers/bookController");

router.get("/getBooks", bookController.getBooks);
router.post("/addBook", bookController.addBook);
router.put("/updateBook", bookController.updateBook);
router.delete("/deleteBook", bookController.deleteBook);

module.exports = router;
