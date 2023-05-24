const Blog = require("../models/blog.model");
const Job = require("../models/job.model");

// DEV
const migrate_tables = async () => {
  try {
    await Blog.sync();
    await Job.sync();
    console.log("Table Migrated Successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

module.exports = migrate_tables;
