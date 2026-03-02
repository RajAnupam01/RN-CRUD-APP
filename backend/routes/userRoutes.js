const express = require('express');
const { registerController, loginController, updateUserController } = require('../controllers/userController');

//router object
const router = express.Router()

//routes
router.post('/register',registerController)
router.post ('/login',loginController)
router.put('/updated-user',updateUserController)

//export
module.exports = router;