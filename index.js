// const express = require('express');

// const app = express();
// const port = 80;

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
