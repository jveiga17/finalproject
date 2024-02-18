const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require('../config/database');

// Configure passport-local strategy
passport.use(new LocalStrategy(
  async function(username, password, done) {
    try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (!result.rows.length) {
        return done(null, false, { message: 'Incorrect username' });
      }
      const isMatch = await bcrypt.compare(password, result.rows[0].password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, result.rows[0]);
    } catch (err) {
      return done(err);
    }
  }
));

// serialize and deserialize user - optimal
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (!result.rows.length) {
      return done(null, false);
    }
    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
