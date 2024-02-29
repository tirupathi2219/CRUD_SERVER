const mongoose = require('mongoose')

const chatSchema = (
    {
        user : {
            type: String,
            required: true
        },
        chat : {
            type: String,
            required: true
        },
        timeStamp : {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports.chatModel = new mongoose.model('chatData', chatSchema)