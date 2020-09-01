const express = require("express");
const userRoutes = require('./api/routes/user')
const defaultRoutes = require('./api/routes/default')

const app = new express();


app.use("/", defaultRoutes);
app.use("/user", userRoutes);

let port = 12345;

app.listen(port, () => {
    console.log("server started on portttt "+ port)
})
