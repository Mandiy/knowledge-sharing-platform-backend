const db = require("../config/db");
const aiHelper = require("../utils/ai.helper");

/*
---------------------------------------
Create Article
---------------------------------------
*/
exports.createArticle = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content required" });
    }

    // Generate summary using AI helper
    const summary = await aiHelper.generateSummary(content);

    const [result] = await db.query(
      `INSERT INTO articles 
       (title, content, category, tags, summary, author_id) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, content, category, tags, summary, req.user.id]
    );

    res.status(201).json({
      message: "Article created successfully",
      articleId: result.insertId,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*
---------------------------------------
Get All Articles (Public)
---------------------------------------
*/
exports.getAllArticles = async (req, res) => {
  try {
    const { search, category } = req.query;

    let query = `
      SELECT 
        a.id,
        a.title,
        a.summary,
        a.category,
        a.tags,
        a.created_at,
        u.username AS author
      FROM articles a
      JOIN users u ON a.author_id = u.id
      WHERE 1=1
    `;

    const params = [];

    if (search) {
      query += `
        AND (
          a.title LIKE ? OR
          a.content LIKE ? OR
          a.tags LIKE ?
        )
      `;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    if (category) {
      query += ` AND a.category = ?`;
      params.push(category);
    }

    query += ` ORDER BY a.created_at DESC`;

    const [articles] = await db.query(query, params);

    res.json(articles);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*
---------------------------------------
Get Single Article
---------------------------------------
*/
exports.getArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const [articles] = await db.query(
      `
      SELECT 
        a.*,
        u.username AS author
      FROM articles a
      JOIN users u ON a.author_id = u.id
      WHERE a.id = ?
      `,
      [id]
    );

    if (articles.length === 0) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json(articles[0]);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*
---------------------------------------
Update Article (Author Only)
---------------------------------------
*/
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, tags } = req.body;

    const [articles] = await db.query(
      "SELECT * FROM articles WHERE id = ?",
      [id]
    );

    if (articles.length === 0) {
      return res.status(404).json({ error: "Article not found" });
    }

    const article = articles[0];

    if (article.author_id !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // generate summary using AI helper if content updated
    const summary = await aiHelper.generateSummary(content);

    await db.query(
      `UPDATE articles 
       SET title = ?, content = ?, category = ?, tags = ?, summary = ?, updated_at = NOW()
       WHERE id = ?`,
      [title, content, category, tags, summary, id]
    );

    res.json({ message: "Article updated successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*
---------------------------------------
Delete Article (Author Only)
---------------------------------------
*/
exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const [articles] = await db.query(
      "SELECT * FROM articles WHERE id = ?",
      [id]
    );

    if (articles.length === 0) {
      return res.status(404).json({ error: "Article not found" });
    }

    const article = articles[0];

    if (article.author_id !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await db.query("DELETE FROM articles WHERE id = ?", [id]);

    res.json({ message: "Article deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*
---------------------------------------
AI Improve Endpoint
---------------------------------------
*/
exports.improveWithAI = async (req, res) => {
  try {
    const { content, action } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content required" });
    }

    const improvedContent = await aiHelper.improveContent(content, action);

    res.json({ improvedContent });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};