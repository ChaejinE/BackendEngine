const express = require("express");
const router = express.Router();
const page = require("../controllers/page");
const { requiredAuth, noRequiredAuth } = require("../middlewares");

router.get("/", noRequiredAuth, page.renderMain);
router.get("/login-success", requiredAuth, page.renderLoginSuccess);
router.get("/login-already", requiredAuth, page.renderLoginAlready);
router.get("/join", noRequiredAuth, page.renderJoin);

module.exports = router;
