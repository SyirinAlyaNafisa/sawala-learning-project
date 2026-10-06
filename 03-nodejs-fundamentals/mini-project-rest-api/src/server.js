const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const logger = require("./middlewares/logger.middleware");
const articlesRouter = require("./routes/articles.route");
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "REST Api berjalan",
  });
});

app.use("/articles", articlesRouter);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
