// server/routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Your User model

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Add your signup logic here (e.g., hash password, save user)
    const newUser = await User.create({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error signing up' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Add your login logic here (e.g., verify user, generate token)
    const user = await User.findOne({ email });
    if (user && user.password === password) { // Replace with hashed password check
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
