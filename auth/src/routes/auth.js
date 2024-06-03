const express = require("express");
const { requiredAuth, noRequiredAuth } = require("../middlewares");
const { join, login } = require("../controllers/auth");

const router = express.Router();
router.post("/join", noRequiredAuth, join);
router.post("/login", noRequiredAuth, login);

module.exports = router;
