const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.post('/next-question', (req, res) => {
  res.send(JSON.stringify({ question: "Does this work?", answers: ['yes', 'no'] }));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});