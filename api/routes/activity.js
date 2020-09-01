const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/all", (req , res, next) => {
    res.status(201).json({
        data: [
            {'icon': 'home', 'title': 'First activity','title1': 'Nadeera'},
            {'icon': 'trash', 'title': 'Second activity','title1': 'Sam'},
            {'icon': 'tree', 'title': 'Third activity','title1': 'Kalahe'},
            {'icon': 'user', 'title': 'Fourth activity','title1': 'Subhis'},
        ]
    })
})

module.exports = router