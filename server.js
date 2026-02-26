require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const articleRoutes = require("./routes/article.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

app.get("/", (req, res) => {
  res.send("Knowledge Sharing API is running...");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});