const express = require("express");
const userRoutes = require('./api/routes/user')
const defaultRoutes = require('./api/routes/default')
const activityRoutes = require('./api/routes/activity')

const app = new express();

app.use("/", defaultRoutes);
app.use("/user", userRoutes);
app.use("/activity", activityRoutes)

let port = 12345;

app.listen(port, () => {
    console.log("Server is started on port "+ port)
})
