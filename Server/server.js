const express = require('express')
const path = require('path')
const cors = require('cors')

require('./db/db')

const app = express()
const port = process.env.PORT || 80

const { routerPost, routerGet } = require('./src/router/url')

app.use(express.json())
app.use(cors())

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))

app.use('/index', async(req, res) => {
    res.send('Hello World')
})

app.use('/v1/enterurl', routerPost)
app.use('/', routerGet)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})