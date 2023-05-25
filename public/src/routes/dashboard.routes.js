const router = require("express").Router();

router.get("/", (req, res) => {
  return res.render("dashboard/index");
});

module.exports = router;
