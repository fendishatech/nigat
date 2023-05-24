const router = require("express").Router();
const BlogPost = require("../models/blog.model");

// GET /blog-posts
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogPost.findAll();
    console.log("SPECIFIC!");
    res.render("home/index", { blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
