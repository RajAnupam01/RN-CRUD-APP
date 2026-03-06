const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const { createPostController, getAllPostController, getUserPostController, deletePostController, updatePostController } = require("../controllers/postController");

//router object

const router = express.Router()

// create post
router.get('/all-post',getAllPostController)
router.get('/user-post',requireSignIn,getUserPostController)
router.post('/create-post',requireSignIn,createPostController)
router.delete('/delete-post/:id',requireSignIn,deletePostController)
router.put('/update-post/:id',requireSignIn,updatePostController)

module.exports = router;