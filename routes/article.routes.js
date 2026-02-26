const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const articleController = require("../controllers/article.controller");

router.get("/", articleController.getAllArticles);
router.get("/:id", articleController.getArticle);

router.post("/", authMiddleware, articleController.createArticle);
router.put("/:id", authMiddleware, articleController.updateArticle);
router.delete("/:id", authMiddleware, articleController.deleteArticle);

router.post("/ai/improve", authMiddleware, articleController.improveWithAI);

module.exports = router;