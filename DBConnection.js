require('dotenv').config();
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('DATABASE CONNECTED....')
}).catch(err => {
    console.log("DB CONNECTION ISSUE", err)
})