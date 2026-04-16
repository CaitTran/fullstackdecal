const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5050;
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is alive!' }); // Change this
});

// THIS PART IS KEY: It must be at the very bottom, 
// outside of any other blocks or functions.
app.listen(PORT, () => {
  console.log(`Server is purring on port ${PORT}`);
});

// This keeps the process hanging open if app.listen fails to loop
setInterval(() => {}, 1000);