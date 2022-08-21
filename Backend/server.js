const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.use(express.json());
app.use("/public", express.static(path.resolve("assets")));
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
