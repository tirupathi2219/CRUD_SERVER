const {chatModel} = require("../models/UsersChatModel")

const updateUsersChat = async (req, res) => {
    const {user, chat} = req.body
    try {
        const createChat = await chatModel.create({user: user.email, chat})
        const totalchat = await chatModel.find()
        console.log(createChat)
        res.send({createChat, totalchat})
    }
    catch (e) {
        console.log(e)
        res.send(e)
    }
}

const getUsersChat = async(req, res) => {
    const{user} = req.body
    try {
        const getChat = await chatModel.find()
        res.send(getChat)
    }
    catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = {
    updateUsersChat,
    getUsersChat

}