const express = require('express')
require('./db')
const path = require('path')
const routerPost = require('./src/model/urlshortener')

const app = express()

const port = process.env.PORT

app.use(express.json) //for parsing

app.use(routerPost)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})