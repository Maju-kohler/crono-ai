const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/dist/crono-ai')));

app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname, '/dist/crono-ai/browser/index.html'));
});

app.get('/', (req, res) =>{
  res.send('Hello World from Node.js server!');
});

app.listen(port, () =>{
  console.log(`Server listening at http://localhost${port}`);
});