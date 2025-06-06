const Car = require('../models/carsModels');
const User = require('../models/userModel')

// GET all cars
const getAllCars = async (req, res) => {
    const cars = await Car.find({}).sort({})
    res.status(200).json(cars);
}

// GET a single car
const getCar = async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car){
        return res.status(404).json({ error: 'No such car'})
    }

    res.status(200).json(car);
}

// GET a single car by userId
const getUserCars = async (req, res) => {
    try {
      const cars = await Car.find({ owner: req.params.userId });
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user cars' });
    }
  };

  const createCar = async (req, res) => {
    // Before check have req.user?
    if (!req.user || !req.user._id) {
        return res.status(401).json({ error: "Authentication required" });
    }

    const { name, year, mileage, ban, color, image, people, engine, gearbox, gear, price, city, description } = req.body;

    const owner = req.user._id;

    // Check all variables
    if (
        !name || 
        !year || 
        !ban || 
        !color || 
        !mileage && mileage !== 0 ||
        !image || 
        !people && people !== 0 || 
        !engine || 
        !gearbox || 
        !gear || 
        !price && price !== 0 || 
        !city || 
        !owner ||
        !description
      ) {
          return res.status(400).json({ error: "Please fill all fields" });
      }
      

    try {

        const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }


        // Get owner name and phone
        const ownerName = user.ownerName || "Unknown";
        const ownerPhone = user.ownerPhone || "Unknown";

        // Create new car
        const car = await Car.create({ ...req.body, owner: req.user._id , ownerName, ownerPhone  });
        res.status(201).json(car); // Return car which created
    } catch (error) {
        res.status(500).json({ error: error.message }); // Error
    }
};


// DELETE a car
const deleteCar = async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id)

    if(!car){
        return res.status(404).json({ error: 'No such car'})
    }

    res.status(200).json(car);
}

// DELETE all cars
const delAllCars = async (req, res) => {
    const cars = await Car.deleteMany({})

    res.status(200).json(cars);
}

// PATCH a car
const updateCar = async (req, res) => {
    const car = await Car.findByIdAndUpdate(req.params.id,{
        ...req.body
    })

    if(!car){
        return res.status(404).json({ error: 'No such car'})
    }

    res.status(200).json(car);
}

module.exports ={
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
    delAllCars,
    getUserCars 
}