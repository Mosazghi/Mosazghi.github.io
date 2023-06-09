const Admin = require("../models/adminModel");
const LocalStrategy = require("passport-local").Strategy;

const initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await Admin.findOne({ username: username });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const user = await Admin.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

module.exports = initializePassport;
