const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const User = require("../models/user");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: false,
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({ where: { email }});
            if (user) {
                const result = bcrypt.compare(password, user.password);
                if (result) {
                    done(null, user);
                } else {
                    done(null, false, { message: "Invalid Password" });
                }
            } else {
                done(null, false, { message: "User Not Exist" });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }))
}
