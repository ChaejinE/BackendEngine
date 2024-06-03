exports.requiredAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).redirect("/login-required");
    }
}

exports.noRequiredAuth = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.status(403).redirect("/login-no-required");
    }
}
