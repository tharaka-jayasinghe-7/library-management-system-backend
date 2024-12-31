const Borrowing = require("../Models/borrowingModel");

const getBorrowings = (req, res, next) => {
  Borrowing.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addBorrowing = (req, res, next) => {
  const borrowing = new Borrowing({
    userId: req.body.userId,
    bookId: req.body.bookId,
    dueDate: req.body.dueDate,
  });
  borrowing
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateBorrowing = (req, res, next) => {
  const { _id, userId, bookId, dueDate } = req.body;

  User.updateOne(
    { _id: _id },
    {
      $set: {
        userId: userId,
        bookId: bookId,
        dueDate: dueDate,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteBorrowing = (req, res, next) => {
  const _id = req.body._id;
  Borrowing.deleteOne({ _id: _id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getBorrowings = getBorrowings;
exports.addBorrowing = addBorrowing;
exports.updateBorrowing = updateBorrowing;
exports.deleteBorrowing = deleteBorrowing;
