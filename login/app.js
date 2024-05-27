const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
const session = require("express-session");
const path = require("path");
const app = express();

const port_str = "port";
app.set(port_str, process.env.PORT || 20080);
app.use(morgan("dev"));
app.use(cookieParser("lottologindev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: "lottologindev",
    cookie: {
        httpOnly: true,
        secure: false,
    }
}))
app.use((req, res, next) => {
    if (req.session.id) {
        express.static(path.join(__dirname, "public-lotto"))(req, res, netx);
    } else {
        next();
    }
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
})
app.get("/login", (req, res) => {
    res.send("<h1> Login page </h1>")
})

app.listen(app.get(port_str), () => {
    console.log(`Listening from Port:${app.get(port_str)}`)
})
