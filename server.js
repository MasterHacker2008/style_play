const express = require('express');
const app = express();
const port = 5000; // You can choose any port

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});