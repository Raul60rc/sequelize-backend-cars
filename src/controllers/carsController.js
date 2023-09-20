const db = require("../api/cars/carsModel");

// model
const Cars = db.Cars;

// functions

// 1. Add Car
const addCar = async (req, res) => {
  try {
    const carData = {
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      fuel: req.body.fuel,
      year: req.body.year,
      kms: req.body.kms,
      door: req.body.door,
      shift: req.body.shift,
      color: req.body.color,
      is_professional: req.body.is_professional,
      province: req.body.province,
      country: "Spain", // Assuming all cars are in Spain
    };

    const car = await Cars.create(carData);
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 2. Get All Cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Cars.findAll({});
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCar,
  getAllCars,
};
