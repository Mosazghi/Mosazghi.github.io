const asyncHandler = require("express-async-handler");
const passport = require("passport");
const renderLogin = (req, res) => {
  if (req.user) {
    console.log("USER", req.user);
    return res.redirect("/admin/adminDashboard");
  }
  res.render("login");
};
const renderAdminDashboard = asyncHandler(async (req, res) => {
  console.log(req.session);
  res.render("adminDashboard.ejs", { user: req.user });
});

const logout = (req, res) => {
  req.logout(() => console.log("OK!"));
  res.redirect("/");
};

module.exports = { renderLogin, logout, renderAdminDashboard };
  