// This is a route
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

router.get("/", (req, res, next) => {
    res.status(201).json({
        message: "User"
    })
})

router.post("signup", (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else {
            const user = new user({
                _id: mongoos.Schema.Type.ObjectId(),
                email: req.body.emai,
                password: hash
            })
            user.save()
                .then(()=> {
                    res.status(201).json({
                        message: "User created successfully"
                    })
                })
                .catch(err =>{ 
                    console.log(err)
                    res.status(500).json({
                        message: err
                    })
                })
        }
    }
    )

})

module.exports = router;