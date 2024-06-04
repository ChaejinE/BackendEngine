const express = require("express");
const { requiredAuth, noRequiredAuth } = require("../middlewares");
const { join, login, logout } = require("../controllers/auth");
const passport = require("passport");

const router = express.Router();
router.post("/join", noRequiredAuth, join);
router.post("/login", noRequiredAuth, login);
router.get("/logout", requiredAuth, logout);

router.get("/kakao", passport.authenticate("kakao"));
router.get("/kakao/callback", passport.authenticate("kakao", {
    failureRedirect: "/?loginError=Fail to login Kakao"
}), (req, res) => {
    res.redirect(`/login-success/?name=${encodeURIComponent(req.user.nickName)}`);
})

module.exports = router;
