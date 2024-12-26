const express = require("express");
const Books = require('./bookschema');
const mongodbConnected = require('./mongodbconnect');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("BOOKS", Books);

app.get('/', (req, res) => {
  res.send("Welcome to the Books API");
});

app.get('/about', async (req, res) => {
  try {
    const count = await Books.countDocuments().exec();
    console.log("Total documents Count before addition:", count);
    res.send("MongoDB, Express, React, and Mongoose app. React runs in another application.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error counting documents");
  }
});

app.get('/allbooks1', async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Error fetching books");
  }
});

app.get('/getbook/:id', async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).send("Error fetching book");
  }
});

app.post('/addbooks', async (req, res) => {
  try {
    const newBook = new Books(req.body);
    await newBook.save();
    res.status(200).json({ 'books': 'Book added successfully' });
  } catch (err) {
    res.status(400).send('Adding new book failed');
  }
});

app.post('/updatebook/:id', async (req, res) => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ 'books': 'Book updated successfully' });
  } catch (err) {
    res.status(400).send('Updating book failed');
  }
});

app.post('/deleteBook/:id', async (req, res) => {
  try {
    await Books.findByIdAndDelete(req.params.id);
    res.status(200).send('Book deleted');
  } catch (err) {
    res.status(400).send('Deleting book failed');
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
