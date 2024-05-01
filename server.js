const express = require("express");
const app = express();
const PORT = 5000;

setInterval(() => {
    console.log("15. rodando...")
}, 15000)

app.get("/", (req, res) => {
    console.log("hellooow!");
    res.send("Hello camila!")
});

app.listen(PORT, () => {
  console.log("Server running on port: "+PORT);
});