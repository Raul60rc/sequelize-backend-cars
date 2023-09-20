const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routers
const carRouter = require("./src/api/cars/carsRouter");
const carRatingRoutes = require("./src/api/ratingCars/ratingCarsRoutes");
const userRouter = require("./src/api/users/userRoutes");

// Routes
app.use("/api/cars", carRouter);
app.use("/api/car-ratings", carRatingRoutes);
app.use("/api/users", userRouter);

// Static Images Folder

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
