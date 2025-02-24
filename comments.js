// Create web server
// Create a route for POST /comments
// Parse the incoming JSON payload
// Add the comment to the list of comments
// Respond with the updated list of comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Parse JSON payload
app.use(bodyParser.json());

// List of comments
let comments = [];

// POST /comments
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Test with curl
// curl -X POST -H "Content-Type: application/json" -d '{"comment": "Hello World"}' http://localhost:3000/comments
// ["Hello World"]

// curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is cool"}' http://localhost:3000/comments
// ["Hello World","This is cool"]
