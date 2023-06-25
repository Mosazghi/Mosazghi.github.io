const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const connectDB = require("./config/db.config");
const createAdminUser = require("./controllers/adminController");
const initializePassport = require("./config/passport");
const PORT = 3000;

const app = express();
connectDB();
console.log("using", process.env.USER, process.env.PASSWORD);
createAdminUser(process.env.USER, process.env.PASSWORD);
initializePassport(passport);

//LOGGER
app.use((req, res, next) => {
  console.log(`HTTP Method - ${req.method}, URL - ${req.url}`);
  next();
});

app.use(session({ secret: "test", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", require("./routes/loginRoute"));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = app;
