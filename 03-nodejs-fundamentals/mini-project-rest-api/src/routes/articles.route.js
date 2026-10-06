const express = require("express");

const {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles.controller");

const router = express.Router();

router.get("/", getArticles); // menentukan route
router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
module.exports = router;
