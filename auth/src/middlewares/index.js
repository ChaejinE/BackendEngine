exports.requiredAuth = (req, res, next) => {
    console.log("It requires auth");
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).redirect("/");
    }
}

exports.noRequiredAuth = (req, res, next) => {
    console.log("It doesn't require auth");
    if (!req.isAuthenticated()) {
        next();
    } else {
        console.log("Already login");
        res.redirect("/login-already");
    }
}
