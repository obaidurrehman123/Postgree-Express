const express = require("express");
const studentRoutes = require("./src/products/routes/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helloooooooo");
});

app.use("/api/v1/products", studentRoutes);
app.listen(port, () => {
  console.log("Server is running");
});
