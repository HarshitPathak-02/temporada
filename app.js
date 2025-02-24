const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


app.listen(8000, () => {
  console.log(`server is listening to port 8000`);
});

app.get("/", (req, res) => {
  res.render("home/home.ejs");
});
app.get("/gyfj", (req, res) => {
  res.render("home/home.ejs");
});

app.get("/weather-info", (req, res) => {
    res.render("weather/weather.ejs");
});
