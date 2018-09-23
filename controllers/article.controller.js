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

articleController.getArticle = async(req, res) => {
    return res.json(await article.findById(req.params.id));
};

articleController.putArticle = async (req, res) => {
    await article.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {id: req.params.id}
    });

    return res.json({
        "status": "article updated"
    });
};

articleController.deleteArticle = async (req, res) => {
    await article.destroy({
        where: {id: req.params.id}
    });

    return res.json({
        "status": "article deleted"
    });
};

module.exports = articleController;