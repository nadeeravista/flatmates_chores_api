const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(201).json({
        message: "Root"
    })
})
module.exports = router;