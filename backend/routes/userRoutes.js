const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    delAllUsers,
    updateUser
} = require('../controllers/userControllers')

// GET all users
router.get('/', getAllUsers)

// Get user by email
router.get('/:id', getUserById)

// Create new user
router.post('/', createUser)

// Update user
router.patch('/:id', updateUser)

// Delete user
router.delete('/:id', deleteUser)

// DELETE all users
router.delete('/', delAllUsers)


module.exports = router;