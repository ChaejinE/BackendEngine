const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.join = async (req, res, next) => {
    const { nickName, email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (user) { return res.redirect("/join?error=exit"); }
        const hash = await bcrypt.hash(password, 12);
        await User.create({ email, nickName, password: hash });
        console.log("Success to create user")
        return res.redirect("/");
    } catch (error) {
        console.error(error);
        next(error);
    }
}

const passport = require("passport");

exports.login = async (req, res, next) => {
    passport.authenticate("local", (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }

        if (!user) {
            return redirect(`/?loginError=${info.message}`);
        }

        return req.login(user, (loginError) => {
            if (loginError) { 
                console.error(loginError);
                return next(loginError);
            }
            
            console.log("Success login");
            res.redirect(`/login-success/?name=${encodeURI(encodeURIComponent(user.nickName))}`);
        })
    })(req, res, next);
}

exports.logout = async (req, res, next) => {
    console.log("logout");
    req.logout(() => {
        req.session.destroy();
        res.redirect("/");
    });
}
