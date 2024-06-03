const express = require("express");
const router = express.Router();
const { renderMain, renderJoin } = require("../controllers/page");

router.get("/", renderMain);
router.get("/join", renderJoin);

module.exports = router;
