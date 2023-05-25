const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.render("auth/login");
});

router.get("/register", (req, res) => {
  return res.render("auth/register");
});

router.get("/logout", (req, res) => {
  return res.render("auth/index");
});

module.exports = router;
