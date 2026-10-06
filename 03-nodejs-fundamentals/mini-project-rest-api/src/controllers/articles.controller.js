const articles = [
  {
    id: 1,
    title: "Belajar Node.js",
    body: "Node.js adalah runtime JavaScript yang berjalan di luar browser.",
    author: "Syirin",
  },
  {
    id: 2,
    title: "Belajar Express",
    body: "Express adalah framework Node.js untuk membuat aplikasi web dan REST API.",
    author: "Syirin",
  },
  {
    id: 3,
    title: "Belajar REST API",
    body: "REST API adalah cara client berkomunikasi dengan server menggunakan HTTP untuk mengelola data.",
    author: "Alya",
  },
];

const getArticles = (req, res) => {
  res.json(articles);
};

const createArticle = (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  articles.push(newArticle);

  res.status(201).json(newArticle);
};

const updateArticle = (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }
  article.title = req.body.title;
  article.body = req.body.body;
  article.author = req.body.author;
  return res.json(article);
};

const deleteArticle = (req, res) => {
  const id = Number(req.params.id);
  const articleIndex = articles.findIndex((article) => article.id === id);

  if (articleIndex === -1) {
    return res.status(404).json({
      message: "Artikel tidak di temukan",
    });
  }
  articles.splice(articleIndex, 1);

  return res.json({
    message: "Artikel berhasil dihapus",
  });
};

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
