const express = require('express')
const { getusers, getuser, postuser, updatuser, deleteuser } = require('../controllers/userController')
const router = express.Router()

router.get('/users', getusers)
router.get('/user/:id', getuser)
router.post('/user', postuser)
router.put('/updateuser/:id', updatuser)
router.delete('/deleteuser/:id', deleteuser)

module.exports = router




