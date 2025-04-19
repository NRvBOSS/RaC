const router = require('express').Router();
const {
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
} = require('../controllers/carsControllers')

// GET all cars
router.get('/', getAllCars)

// GET a single car
router.get('/:id', getCar)

// POST a new car
router.post('/', createCar)

// PATCH a car
router.patch('/:id', updateCar)

// DELETE a car
router.delete('/:id', deleteCar)


module.exports = router;