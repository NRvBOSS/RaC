const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  registerValidationSchema,
  loginValidationSchema
} = require('../validation/userValidation');

// GET all users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({});
  res.status(200).json(users);
};

// GET a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};

// REGISTER a new user
const signInUser = async (req, res) => {
  const { error } = registerValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { email, name, phone, password } = req.body;

  if (!email || !name || !phone || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: 'Email already exists...' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      name,
      phone,
      password: hashedPassword
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// LOGIN a user
const loginUser = async (req, res) => {
  const { error } = loginValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Email or password is wrong!' });
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.status(400).json({ error: 'Password is wrong!' });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.header('auth-token', token).json({ token, message: "Logged in!" });
};

// DELETE a user by ID
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: 'No such user' });
  res.status(200).json(user);
};

// DELETE all users
const delAllUsers = async (req, res) => {
  const users = await User.deleteMany({});
  res.status(200).json(users);
};

// UPDATE a user by ID
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!user) return res.status(404).json({ error: 'No such user' });
  res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  signInUser,
  loginUser,
  deleteUser,
  delAllUsers,
  updateUser
};
