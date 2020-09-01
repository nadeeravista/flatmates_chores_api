const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/all", (req , res, next) => {
    res.status(201).json({
        message: [{'name': "First activity"},{'name': "Second activity"}]
    })
})

module.exports = router