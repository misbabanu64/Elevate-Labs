const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Elevate Labs Task-01 CI/CD Pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
