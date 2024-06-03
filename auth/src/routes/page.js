const express = require("express");
const router = express.Router();
const page = require("../controllers/page");

router.get("/", page.renderMain);
router.get("/join", page.renderJoin);
router.get("/login-success", page.renderLoginSuccess);
router.get("/login-required", page.renderLoginRequired);
router.get("/login-no-required", page.renderLoginNoRequired);

module.exports = router;
