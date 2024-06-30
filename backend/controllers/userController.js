const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



// @desk Register New user
// @route Post /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if the user exists

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already Exist') 
    }

    //Hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user  

    const user = await User.create ({
        name,
        email,
        password: hashedPassword  //set the password to the hashed password when creating a user
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }
})


// @desk Authenticate a user
// @route Post /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid credential')
    }
})

   
// @desk Get User data
// @route Get /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
}) 

// generate JWT 

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}




/// i want to delete the first user it worked hurrayyy Alhamdulillah 

const deleteUser = asyncHandler (async (req,res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    
    res.status(200).json({ id: req.params.id,
        name: user.name
     })
})
   

module.exports = {
    registerUser,
    loginUser,
    getMe,
    deleteUser,
}