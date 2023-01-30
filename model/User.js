const mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    }, 
    age: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("UserInfo",userSchema);