require("dotenv").config();
const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const connectDB = require("./db.config");
const PORT = 3000;
connectDB();

// view engine setup
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", require("./routes/adminRoute"));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = app;
