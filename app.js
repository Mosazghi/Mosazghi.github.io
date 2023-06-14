require("dotenv").config();
const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;
const path = require("path");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("DB connected!"));

// view engine setup
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = app;
