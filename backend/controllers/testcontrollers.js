const asyncHandler  = require("express-async-handler")


const TestSchema  = require('../models/testmodels');



//async handler for throwing error instead of traditional thor catch 
const GetTest =  asyncHandler(async(req ,res) => {
    
    const goal = await TestSchema.find();
    res.status(200).json(goal)
} )


const PostTest = asyncHandler(async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body

    if (!req.body.text) {
        res.status(400).json({ error: "Missing 'text' in request body" });
    }
    const goal = await TestSchema.create({

        text : req.body.text 
    })

    res.status(200).json(goal)
    // Rest of the controller logic
});




const PutTest = asyncHandler(async(req ,res) => {
    res.status(200).json({message : `Put test  ${req.params.id} ` })
})


const DeleteTest = asyncHandler(async(req ,res) => {
    res.status(200).json({message : `delete test ${req.params.id}`})
});



module.exports = {
    GetTest,
    PostTest,
    PutTest,
    DeleteTest
};