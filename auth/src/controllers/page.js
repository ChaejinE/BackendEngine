const path = require("path");

exports.renderMain = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public-lotto/main.html"));
}

exports.renderJoin = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public-lotto/join.html"));
}
