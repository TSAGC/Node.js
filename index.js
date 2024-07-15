const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the first page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page1.html'));
});

// Route to handle the form submission
app.get('/submit', (req, res) => {
  const { email, password } = req.query;

  if (email == 'savvasnicolaou4488' && password == '12345') {
    res.send(`
    <h1>Received Data</h1>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    <a href="/">Go back</a>
  `);
  } else {
    // send to error handeling page 
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


