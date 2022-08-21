const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const axios = require("axios");
app.use(cors());
app.set("view engine", "hbs");
app.use(express.json());
async function getData() {
  const res = await axios.get(`http://localhost:3001/Apartment`);
  Apartment = res.data[0];
  return Apartment;
}
let data = getData();
let apartment1;
data.then((value) => {
  apartment1 = value;
});

app.use("/public", express.static(path.resolve("assets")));
app.get("/", (req, res) => {
  res.render("index", { apartment: apartment1 });
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
