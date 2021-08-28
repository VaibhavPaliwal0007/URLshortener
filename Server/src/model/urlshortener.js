const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true,
        trim : true,
    },

    shorturl : {
        type : String,
        required : true,
        unique : true,
    },
}, { timestamps : true} )

const URL = mongoose.model('URL', urlSchema)

module.exports = URL
