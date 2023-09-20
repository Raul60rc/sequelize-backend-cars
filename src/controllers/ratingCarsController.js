const db = require("../api/ratingCars/ratingCars"); // Change the require statement to the models folder

// model
const CarRating = db.CarRating;

// functions

// 1. Add Car Rating
const addCarRating = async (req, res) => {
  try {
    const carRatingData = {
      car_id: req.body.car_id,
      user_id: req.body.user_id,
      rating: req.body.rating,
    };

    const carRating = await CarRating.create(carRatingData);
    res.status(201).json(carRating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 2. Get All Car Ratings
const getAllCarRatings = async (req, res) => {
  try {
    const carRatings = await CarRating.findAll({});
    res.status(200).json(carRatings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCarRating,
  getAllCarRatings,
};
