const posturl = require('../controller/posturl')
const express = require('express')

const routerPost = new express.Router()

routerPost 
       .route('/')
       .post(posturl.PostUrl)


module.exports= {
       routerPost
}