const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const { createPostController, getAllPostController } = require("../controllers/postController");

//router object

const router = express.Router()

// create post
router.get('/all-post',getAllPostController)
router.post('/create-post',requireSignIn,createPostController)

module.exports = router;