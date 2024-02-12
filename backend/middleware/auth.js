const passport = require('passport');
const bcrypt = require('bcrypt');
const pool = require('../config/database');

// Configure passport-local strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    // finding user in db by username
    pool.query('SELECT * FROM users WHERE username = $1', [username], (err, result) => {
      if (err) {
        return done(err);
      }
      if (!result.rows.length) {
        return done(null, false, { message: 'Incorrect username' });
      }
      // comparing hashed password
      bcrypt.compare(password, result.rows[0].password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, result.rows[0]);
      });
    });
  }
));

// serialize and deserialize user - optimal
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, result) => {
    done(err, result.rows[0]);
  });
});

module.exports = passport;
