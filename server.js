const express = require("express");
const app = express();
const PORT = 80;

setInterval(() => {
    console.log("rodando...")
}, 5000)

app.get("/", (req, res) => {
    console.log("hellooow!");
    res.send("Hello world!")
});

app.listen(PORT, () => {
  console.log("Server running on port: "+PORT);
});