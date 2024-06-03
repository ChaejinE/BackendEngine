const express = require("express");
const router = express.Router();
const { renderMain, renderJoin, renderLoginSuccess } = require("../controllers/page");

router.get("/", renderMain);
router.get("/join", renderJoin);
router.get("/login-success", renderLoginSuccess);

module.exports = router;
