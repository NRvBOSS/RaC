const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    signInUser,
    loginUser,
    deleteUser,
    delAllUsers,
    updateUser
} = require('../controllers/userControllers')

// GET all users
router.get('/', getAllUsers)

// Get user by email
router.get('/:id', getUserById)

// Create new user
router.post('/signin', signInUser)

// Create new user
router.post('/login', loginUser)

// Update user
router.patch('/:id', updateUser)

// Delete user
router.delete('/:id', deleteUser)

// DELETE all users
router.delete('/', delAllUsers)


module.exports = router;