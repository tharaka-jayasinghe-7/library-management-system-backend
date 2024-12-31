const { response } = require("../app");
const Book = require("../Models/bookModel");

const getBooks = (req, res, next) => {
  Book.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addBook = (req, res, next) => {
  const book = new Book({
    _id: req.body._id,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    price: req.body.price,
    qty: req.body.qty,
  });
  book
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateBook = (req, res, next) => {
  const { _id, title, author, publisher, price, qty } = req.body;

  Book.updateOne(
    { _id: _id },
    {
      $set: {
        title: title,
        author: author,
        publisher: publisher,
        price: price,
        qty: qty,
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

const deleteBook = (req, res, next) => {
  const _id = req.body._id;
  Book.deleteOne({ _id: _id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getBooks = getBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
