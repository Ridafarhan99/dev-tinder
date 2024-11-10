const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

// testing
app.use("/error", (req, res) => {
  res.send("Page Not Found");
});

app.listen(port, () => {
  console.log(`App listening to Port ${port}`);
});
