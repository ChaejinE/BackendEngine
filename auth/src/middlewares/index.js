exports.requiredAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).redirect("/");
    }
}

exports.noRequiredAuth = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login-already");
    }
}
