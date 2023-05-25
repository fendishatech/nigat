const router = require("express").Router();

router.get("/", (req, res) => {
  return res.render("jobs/index");
});

module.exports = router;
