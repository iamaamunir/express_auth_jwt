const bookModel = require("../models/bookModel");

async function getAllBooks(req, res) {
  await bookModel
    .find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

async function getBookById(req, res) {
  const id = req.params.id;
  await bookModel
    .findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
}

async function createBook(req, res) {
  const book = req.body;
  book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  await bookModel
    .create(book)
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

async function updateById(req, res) {
  const id = req.params.id;
  const book = req.body;
  book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  await bookModel
    .findByIdAndUpdate(id, book, { new: true })
    .then((newBook) => {
      res.status(200).send(newBook);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

async function deleteById(req, res) {
  const id = req.params.id;
  await bookModel
    .findByIdAndRemove(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateById,
  deleteById,
};
