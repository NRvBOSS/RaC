const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    deleteAllUsers
} = require('../controllers/userControllers');

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Update user
router.patch('/:id', updateUser);

// Delete user by ID
router.delete('/:id', deleteUser);

// Delete all users
router.delete('/', deleteAllUsers);

module.exports = router;
