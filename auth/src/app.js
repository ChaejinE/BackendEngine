const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const path = require("path");
const { sequelize } = require("./models");
const app = express();

const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");

passportConfig();
sequelize.sync( { force: false })
    .then(() => { console.log("Success to connect DB"); })
    .catch((error) => { console.error(error); })
const port_str = "port";
app.set(port_str, process.env.PORT || 8001);
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
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    if (req.session.id) {
        express.static(path.join(__dirname, "public-lotto"))(req, res, next);
    } else {
        next();
    }
})

app.use("/", pageRouter);
app.use("/auth", authRouter);
app.use((req, res, next) => {
    if (process.env.NODE_ENV == "conatiner" || process.env.NODE_ENV == "dev") {
        const error = new Error(`${req.method} ${req.url} there is no router`);
        error.status = 404;
        next(error)
    }
})

app.listen(app.get(port_str), () => {
    console.log(`Listening from Port:${app.get(port_str)}`)
})
