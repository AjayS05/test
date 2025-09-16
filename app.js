app.js: 
const express = require("express");
const app = express();

app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User." });
});

// REQUIRED: listen on port 80
const PORT = 80;
app.listen(PORT, () => console.log
