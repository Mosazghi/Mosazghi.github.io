function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/admin/login");
}
module.exports = { checkAuth };
