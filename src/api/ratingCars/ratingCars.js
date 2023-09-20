module.exports = (sequelize, DataTypes) => {
  const CarRating = sequelize.define("CarRating", {
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, // Minimum rating value (1 star)
        max: 5, // Maximum rating value (5 stars)
      },
    },
  });

  return CarRating;
};
