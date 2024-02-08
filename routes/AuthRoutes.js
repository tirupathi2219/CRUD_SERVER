const {Router} = require('express')
const { userLogin, createUser, getAllUsers, updateUser, deleteUser, updateUsersChat } = require('../controllers/AuthCOntrollers')
// const router = require('express').Router()
const router = Router()

router.post('/login', userLogin)
router.post('/register', createUser)
router.get('/users', getAllUsers)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser )
router.post('/updateUsersChat', updateUsersChat)



module.exports = router