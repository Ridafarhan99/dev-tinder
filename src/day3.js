const express = require("express");
const app = express();
const port = 6000;

app.use("/", (req, res) => {
  const token = "xyz";
  const isAdminAuth = token === "xy";

  if (!isAdminAuth) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
});

app.get("/user", (req, res, next) => {
  // res.send("Response");
  next();
});

app.get("/user", (req, res, next) => {
  res.send("Response 2");
  next();
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
