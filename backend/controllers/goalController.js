const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desk Get GOals  
// @route GET /api/goals
// @access Private 

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals) 
})
// @desk Set GOals 
// @route POST /api/goals
// @access Private 

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create ({
        text: req.body.text,
        user: req.user.id ,
    })
    res.status(200).json(goal)
})
// @desk Update GOal 
// @route PUT /api/goals/:id
// @access Private 

const updateGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // check for user 

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
     
    // making sure the logged in user matched the goal user
    if(goal.user.toString() !== user.id){
       res.status(401)
       throw new Error('User not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desk Delete GOal 
// @route DELETE /api/goals/:id
// @access Private 

const deleteGoal = asyncHandler (async (req,res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // check for user 

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
     
    // making sure the logged in user matched the goal user
    if(goal.user.toString() !== req.user.id){
       res.status(401)
       throw new Error('User not Authorized')
    }
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}