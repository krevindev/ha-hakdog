import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO World");
});

app.listen(5000, () => console.log("Running"));
