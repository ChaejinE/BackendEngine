const passport = require("passport");
const localStrategy = require("./localStrategy");
const kakaoStrategy = require("./kakaoStrategy");
const User = require("../models/user");

module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log("serial");
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        console.log("deserial");
        User.findOne({ where: { id } })
            .then((user) => { done(null, user)})
            .catch((error) => { done(error); })
    })

    localStrategy();
    kakaoStrategy();
}
