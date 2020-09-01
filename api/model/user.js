// This is a model class
const mongoos = require('mongoose');

const userScheam = mongoos.Schema({
    _id: mongoos.Schema.Type.ObjectId(),
    email: { type: String , require: true},
    password: { type: String , require: true}
});

module.exports = mongoos.model('User',userScheam);