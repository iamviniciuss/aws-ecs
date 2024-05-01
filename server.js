const express = require("express");
const app = express();
const PORT = 5000;

app.get("/health-check", (req, res) => {
  console.log("health-check!");
  res.send("OK")
});

app.get("/", (req, res) => {
    res.send("Hello world em javascript!")
});

app.listen(PORT, () => {
  console.log("Server running on port: "+PORT);
});