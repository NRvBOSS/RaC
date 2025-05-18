const {
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
    delAllCars,
    getUserCars,
} = require('../controllers/carsControllers')
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');


// GET all cars
router.get('/', getAllCars)

// GET user's cars
router.get('/user/:userId', getUserCars)

// GET a single car
router.get('/:id', getCar)

// POST a new car
router.post('/', authMiddleware, createCar)

// PATCH a car
router.patch('/:id', updateCar)

// DELETE a car
router.delete('/:id', deleteCar)

// DELETE all cars
router.delete('/', delAllCars)

module.exports = router