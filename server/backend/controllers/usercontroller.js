
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/usermodels')




const GetUser = asyncHandler(async (req, res) => { 
    const users = await User.findOne(); // Await the result of the query
    res.status(200).json(users);
});



const RegisterUser = asyncHandler(async(req , res ) => { 
    const {name , email , password , lastname} = req.body ; 

    //if information isnt entered completely 
    if (!name || !email || !password ){
        res.status(400)
        res.json({err : "Incomplete fields"} )
        throw new Error("Please add all Fields")
        
    }

    //if user already exists
    
    //isnt working

    // const userExists  = User.findOne({email})
    // if(userExists){
    //     res.json({msg : 'user already exist'})
    // } 

    //password Hashing 
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password , salt)

    //create a new user into Database 
    const user = User.create({
        name ,
        email,
        lastname,
        password: hashedpassword
    })

    if(user) {
        res.status(201).json({message : "User Created " ,  user : user.name })
    }
})


const LoginUser = asyncHandler(async(req , res) => { 

    const {email , password} = req.body

    const user = await User.findOne({email})

    if(email && (await bcrypt.compare(password , user.password)) ){    
    res.status(200).json({
        id : user.id,
        name : user.name,
        email:user.email,
    })
    }
    else{
        res.json("Invalid Credentials")
    }

})


const gettoken = (id) => {
    const token  = jwt.sign({id} , process.env.jwt_secret , {expiresIn : '30d'} )
    return token
}


const DeleteUser = asyncHandler(async(req , res) => { 
    res.status(200).json({message : 'succesfull get'})
})


const UpdateUser = asyncHandler(async(req,res) =>{

    nname = req.body.name
    const result =   await User.updateOne({ name: "musfarr" }, { email: "123@sssss.com" });

    if(result.modifiedCount != 0){
    res.status(200).json({message : 'Updated Successfuly'})
    }
    else{
        res.status(400).json({message : 'Couldnt Find User with name'})
    }

})

module.exports =  {
    GetUser,
    RegisterUser,
    LoginUser,
    DeleteUser,
    UpdateUser

}
