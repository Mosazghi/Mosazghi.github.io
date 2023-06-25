const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const passport = require("passport");
const {
  renderLogin,
  logout,
  renderAdminDashboard,
} = require("../controllers/loginController");
const { setFag, getAlleFag } = require("../controllers/fagController");

router.get("/login", renderLogin);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin/adminDashboard",
    failureRedirect: "/admin/login",
  })
);
router.get("/logout", logout);
router.get("/adminDashboard", checkAuth, renderAdminDashboard);
router.post("/adminDashboard", checkAuth, setFag);
router.get("/adminDashboard/alleFag", getAlleFag);

module.exports = router;
