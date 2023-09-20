const validSpanishProvinces = require("./provinces");

validSpanishProvinces;
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define("Cars", {
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fuel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    door: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shift: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_professional: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [validSpanishProvinces],
          msg: "Invalid Spanish Province",
        },
      },
    },
    country: {
      type: DataTypes.ENUM("Spain"),
      allowNull: false,
      defaultValue: "Spain",
    },
  });

  return Cars;
};
