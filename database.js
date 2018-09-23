const Sequelize = require("sequelize");
const connection = new Sequelize("sequelizer_example", "sequelizer_example", "1234", {
    dialect: "postgres"
});

module.exports = connection;