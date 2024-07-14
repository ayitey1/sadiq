// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/message', (req, res) => {
  const userMessage = req.body.message;

  // Simple logic to respond to messages
  let botMessage = 'I am not sure how to respond to that.';

  if (userMessage.includes('hello')) {
    botMessage = 'Hello! How can I assist you today?';
  } else if (userMessage.includes('book a ride')) {
    botMessage = 'Sure, I can help you book a ride. Where would you like to go?';
  }

  res.send({ message: botMessage });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
