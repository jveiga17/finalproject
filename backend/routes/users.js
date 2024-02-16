const bcrypt = require('bcrypt');
const express = require('express');
const passport = require('../passport'); 
const pool = require('../config/database');
const router = express.Router();


// GET
router.get('/register', (req, res) => {
  console.log('GET /register ok');
  res.send('Registration page'); // test message
});

router.get('/login', (req, res) => {
  console.log('GET /login ok');
  res.send('Login is ok'); 
});

router.get('/logout', (req, res) => {
  req.logout(); // Passport.js method to logout user
  res.redirect('/login'); 
});


// POST
router.post('/register', async (req, res) => {
    try {
      // extracting user details from req body
      const { username, email, password } = req.body;
  
      // checking if user already exists in the database
      const userExists = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // hashing
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // insert new user into db
      await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// user login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile', // Redirect to homepage on successful login
  failureRedirect: '/login', // Redirect to login page on failed login
}), (req, res) => {
  console.log('User logged in successfully:', req.user); // Log user details upon successful login
});


module.exports = router;
