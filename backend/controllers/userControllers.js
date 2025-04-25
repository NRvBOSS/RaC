const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




// GET all users
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({})
    res.status(200).json(users);
}

// Get a single user by email
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
}

// Create a new user
const createUser = async (req, res) => {
    const { email, name, phone, password } = req.body;

    // Empty field check
    if (!email || !name || !phone || !password) {
        return res.status(400).json({ error: "Please fill all fields" });
    }

    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with hashed password
        const user = await User.create({
            email,
            name,
            phone,
            password: hashedPassword
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a user
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
        return res.status(404).json({ error: 'No such user'})
    }

    res.status(200).json(user);
}

// DELETE all users
const delAllUsers = async (req, res) => {
    const users = await User.deleteMany({})

    res.status(200).json(users)
}

// PATCH a user
const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        ...req.body
    })

    if(!user){
        return res.status(404).json({ error: 'No such user'})
    }

    res.status(200).json(user);
} 

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    delAllUsers,
    updateUser
}