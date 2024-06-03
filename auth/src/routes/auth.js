const express = require("express");
const { requiredAuth, noRequiredAuth } = require("../middlewares");
const { join, login, logout } = require("../controllers/auth");

const router = express.Router();
router.post("/join", noRequiredAuth, join);
router.post("/login", noRequiredAuth, login);
router.post("/logout", requiredAuth, logout);

module.exports = router;
