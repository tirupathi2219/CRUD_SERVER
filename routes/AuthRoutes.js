const {Router} = require('express')
const { userLogin, createUser, getAllUsers, updateUser, deleteUser, updateUsersChat, getUsersChat } = require('../controllers/AuthControllers')
// const router = require('express').Router()
const router = Router()

router.post('/login', userLogin)
router.post('/register', createUser)
router.get('/users', getAllUsers)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser )


module.exports = router