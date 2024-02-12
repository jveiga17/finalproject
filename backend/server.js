const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('./passport');
const profileRouter = require('./routes/profile');
const pool = require('./config/database'); 
const usersRouter = require('./routes/users');
const session = require('express-session');

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Express session
app.use(session({
  secret: 'mysecretkey', 
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/', usersRouter);
app.use('/profile', profileRouter);

// GET route homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
