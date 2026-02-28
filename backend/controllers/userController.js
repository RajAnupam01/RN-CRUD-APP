const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')
const { hashPassword, comparePassword } = require("../utils/authUtils")


const registerController = async (req,res) => {
    try {
        const {name,email,password} = req.body
        if(!name){
            return res.status(400).send({
                success:false,
                message:'name is required'
            })
        }
        if(!email){
            return res.status(400).send({
                success:false,
                message:'email is required'
            })
        }
        if(!password || password.length <6 ){
            return res.status(400).send({
                success:false,
                message:'password is required and must be 6 character long.'
            })
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(500).send({
                success:false,
                message:"User Already Register with this email."
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await userModel({name,email,password:hashedPassword}).save()

       return res.status(201).send({
            success:true,
            message:'Registration successful please login'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Register API',
            error,
        })
}
}

const loginController = async(req,res) =>{
    try {
            const {email,password} = req.body
            if(!email || !password){
                return res.status(500).send({
                    success:false,
                    message:"Please provide Email and Password"
                })
            }

            const user = await userModel.findOne({email})
            if(!user){
                return res.status(500).send({
                    success:false,
                    message:'User not Found.'
                })
            }

            const match = await comparePassword(password,user.password)

            if(!match){
                return res.status(500).send({
                    success:false,
                    message:'Invalid username or password'
                })
            }

            const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
                expiresIn:'7d'
            })

            user.password = undefined

            res.status(200).send({
                success:true,
                message:'login successfully',
                token,
                user
            })


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Login API',
            error
        })
    }
}

module.exports = {registerController,loginController};