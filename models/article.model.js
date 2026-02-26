const db = require("../config/db");

exports.createArticle = async (article) => {
  const { title, summary, content, category, tags, author_id } = article;

  return db.query(
    `INSERT INTO articles 
     (title, summary, content, category, tags, author_id) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, summary, content, category, tags, author_id]
  );
};

exports.getAllArticles = async (search, category) => {
  let query = `
    SELECT a.*, u.username AS author 
    FROM articles a
    JOIN users u ON a.author_id = u.id
    WHERE 1=1
  `;

  const params = [];

  if (search) {
    query += ` AND (a.title LIKE ? OR a.content LIKE ? OR a.tags LIKE ?)`;
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  if (category) {
    query += ` AND a.category = ?`;
    params.push(category);
  }

  query += ` ORDER BY a.created_at DESC`;

  return db.query(query, params);
};

exports.getArticleById = async (id) => {
  const [rows] = await db.query(
    `SELECT a.*, u.username AS author 
     FROM articles a
     JOIN users u ON a.author_id = u.id
     WHERE a.id = ?`,
    [id]
  );

  return rows[0];
};

exports.updateArticle = async (id, article) => {
  const { title, content, category, tags, summary } = article;

  return db.query(
    `UPDATE articles 
     SET title=?, content=?, category=?, tags=?, summary=? 
     WHERE id=?`,
    [title, content, category, tags, summary, id]
  );
};

exports.deleteArticle = async (id) => {
  return db.query("DELETE FROM articles WHERE id=?", [id]);
};