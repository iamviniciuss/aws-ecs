const express = require("express");
const app = express();
const PORT = 5000;

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