const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.get('/hi', (req, res) => {
    res.send('Hello, world2!');
  });
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});