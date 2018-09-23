const article = require("./../models/Article");

const articleController = {};

articleController.getArticles = async(req, res) => {
    return res.json(await article.findAll());
};

articleController.postArticle = async(req, res) => {
    await article.create({
        title: req.body.title,
        body: req.body.body
    });

    return res.json({
        "status": "article created"
    });
};

module.exports = articleController;