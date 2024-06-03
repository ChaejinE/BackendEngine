const path = require("path");

const public_dir_name = "public-lotto";

exports.renderMain = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/main.html`));
}

exports.renderJoin = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/join.html`));
}

exports.renderLoginSuccess = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login-success.html`));
}
