const express = require('express')
const path = require('path')

require('./db/db')

const app = express()
const port = process.env.PORT 

const RouteUrl = require('./src/router/url')

app.use(express.json())

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectory, '/html/index.html'))
})

app.use('/v1/enterurl', RouteUrl.routerPost)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})