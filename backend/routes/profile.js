const express = require('express');
const router = express.Router();

// check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // If yes, proceed to next middleware
    }
    res.redirect('/login'); // If no, redirect to login page
};

// Protected route that can only be accessed by authenticated users
router.get('/', isAuthenticated, (req, res) => {
    res.send('Welcome to your profile page, ' + req.user.username); // display the username of authenticated user
});

module.exports = router;