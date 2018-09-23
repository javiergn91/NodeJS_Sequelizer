const Sequelize = require("sequelize");
const connection = require("../database");

var Article = connection.define("article", {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
});

connection.sync();

module.exports = Article;