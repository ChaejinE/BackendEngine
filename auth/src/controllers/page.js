const path = require("path");

const public_dir_name = "public-lotto";

exports.renderMain = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/main.html`));
}

exports.renderLogin = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login.html`));
}

exports.renderJoin = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/join.html`));
}

exports.renderLoginSuccess = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login-success.html`));
}

exports.renderLoginAlready = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login-already.html`));
}

exports.renderLoginRequired = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login-required.html`));
}

exports.renderLoginNoRequired = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", `${public_dir_name}/login-no-required.html`));
}
