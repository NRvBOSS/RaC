const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    registerValidationSchema,
    loginValidationSchema
} = require('../validation/userValidation');

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Get a single user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
};

// Register a new user
const registerUser = async (req, res) => {
    const { error } = registerValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, phone, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            phone,
            email,
            password: hashedPassword
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Login a user
const loginUser = async (req, res) => {
    const { error } = loginValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Email or password is wrong' });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(400).json({ error: 'Password is wrong' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.header('auth-token', token).json({ token, name: user.name, phone: user.phone, email:user.email, id: user._id, message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update user' });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete user' });
    }
};

// Delete all users
const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(200).json({ message: 'All users deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete users' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    deleteAllUsers
};
