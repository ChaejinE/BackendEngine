const express = require("express");
const app = express();

const port_str = "port";
app.set(port_str, process.env.PORT || 20080);
app.listen(app.get(port_str), () => {
    console.log(`Listening from Port:${app.get(port_str)}`)
})
