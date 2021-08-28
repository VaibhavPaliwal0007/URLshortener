const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    longUrl : {
        type : String,
        required : true,
        trim : true,
    },

    shortUrl : {
        type : String,
        required : true,
        unique : true,
    },
}, { timestamps : true} )

const Url = mongoose.model('URL', urlSchema)

module.exports = Url
