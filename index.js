const dbConfig = require("./src/utils/database/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database..");
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cars = require("./carsModel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);
db.rating = require("./ratingCars.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database sync done!");
});

module.exports = db;
