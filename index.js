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

db.cars = require("./src/api/cars/carsModel")(sequelize, DataTypes);
db.users = require("./src/api/users/userModel")(sequelize, DataTypes);
db.rating = require("./src/api/ratingCars/ratingCars")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database sync done!");
});

module.exports = db;
