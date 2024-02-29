const {Router} = require('express')
const { updateUsersChat, getUsersChat } = require('../controllers/UsersChatControllers')
const router = Router()
router.post('/updateUsersChat', updateUsersChat)
router.get('/getUsersChat', getUsersChat)

module.exports = router