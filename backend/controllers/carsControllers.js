const Car = require('../models/carsModels');

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

// POST a new cars
const createCar = async (req, res) => {
    const { name, year, sale, rent ,people, engine, gearbox, gear, price, owner, city } = req.body

    if ( !name, !year, !sale, !rent, !people, !engine, !gearbox, !gear, !price, !owner, !city ){
        return res.status(400).json({ error: "Please fill all fields"})
    }

    try{
        const car = await Car.create({ ...req.body})
        res.status(200).json(car)
    }
    catch (error){
        res.status(400).json({ error: error.message})
    }
}

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
    delAllCars
}