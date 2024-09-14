const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I\'m an endpoint!');
});

app.listen(7777, () => {
  console.log('Server is running on http://localhost:7777');
});
