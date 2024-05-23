const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fullname : {
        type : String,
        required: true
    },
    birthday : {
        type: Number,
        required: true,
    },
    gender : {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    country : {
        type: String,
        required: true,
    },
    profession : {
        type: String,
        required: true,
    },
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;



// fullname : req.body.fullname,
// biethday : req.body.birthday,
// gender: req.body.gender,
// city : req.body.city,
// country: req.body.country,
// profession: req.body.profession,