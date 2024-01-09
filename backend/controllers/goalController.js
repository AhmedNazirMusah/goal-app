const asyncHandler = require('express-async-handler')

// @desk Get GOals 
// @route GET /api/goals
// @access Private 

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get Goals'})
})
// @desk Set GOals 
// @route POST /api/goals
// @access Private 

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message: 'User is seting a goal'})
})
// @desk Update GOal 
// @route PUT /api/goals/:id
// @access Private 

const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desk Delete GOal 
// @route DELETE /api/goals/:id
// @access Private 

const deleteGoal = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}