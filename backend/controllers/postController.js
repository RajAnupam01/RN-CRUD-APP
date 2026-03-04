const postModel = require("../models/postModel");

const createPostController = async(req,res) => {
    try {
        const {title,description} = req.body;
        if(!title || ! description){
            return res.status(500).send({
                success:false,
                message:"Please provide all Field"
            })
        }
        const post = await postModel({
            title,
            description,
            postedBy:req.auth._id
        }).save()
        console.log(req)
        res.status(201).send({
            success:true,
            message:"Post created Successfully.",
            post
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in post api"
        })
    }
}

const getAllPostController = async(req,res) => {
    try {
        const posts = await postModel.find().populate('postedBy',"_id name").sort({createdAt:-1})
        res.status(200).send({
            success:true,
            message:'All post data',
            posts
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get all post api.'
        })
    }
}

module.exports = {createPostController,getAllPostController}