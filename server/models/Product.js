const Sequelize = require("sequelize");
const db = require("../server");

const Product = db.define("product", {
  // DEFINE YOUR MODEL FIELDS HERE
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("INSTOCK", "BACKORDERED", "DISCONTINUED")
  }
});

module.exports = Product;
