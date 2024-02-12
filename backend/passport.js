const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require('./config/database'); 

// Configure local strategy for username/password authentication
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Find user in database by username
      const userQuery = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = userQuery.rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      // If authentication is successful, return user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Retrieve user from database by id
    const userQuery = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = userQuery.rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
