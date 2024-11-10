const express = new express();
const app = express();
const port = 7000;

// get
app.get("/get", (req, res) => {
  res.send("get method");
});

// post
app.post("/post", (req, res) => {
  res.send("post method");
});

// patch
app.patch("/patch", (req, res) => {
  res.send("patch method");
});

// put
app.put("/put", (req, res) => {
  res.send("put method");
});

// delete
app.delete("/delete", (req, res) => {
  res.send("delete method");
});

// routing
app.get("/us+er/:name/:id", (req, res) => {
  res.send(`User ID: ${req.params.id} \n User Name: ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server is running to PORT ${port}`);
});
