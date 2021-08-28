const mongooose = require('mongoose')

mongooose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology : true
})