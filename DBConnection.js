const mongoose = require('mongoose')

const MONGODB_URL = "mongodb+srv://ssavsm:ssavsm143@cluster0.3sjg1ti.mongodb.net/"

mongoose.connect(MONGODB_URL).then(() => {
    console.log('DATABASE CONNECTED....')
}).catch(err => {
    console.log("DB CONNECTION ISSUE", err)
})