const mongoose = require('mongoose')


const UserModel = mongoose.Schema({

    name : {
        type: String , 
        required :[ true , "Enter Name"]

    } ,

    email : {
        type:String ,
        required : [true , "Enter Email"]
    } ,
    lastname : {
        type:String,
        // required : [true , 'enter lastname']
    } ,

    password : {
        type : String ,
        required : [true , "Enter Password" ]
    }

},

{
    timestamps : true
}

)


module.exports = mongoose.model("User" , UserModel)