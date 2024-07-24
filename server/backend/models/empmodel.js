const mongoose = require('mongoose')


const employee = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    number : {
        type : Number ,
        required : true
    }

})

module.exports = mongoose.model('emploooyeee' , employee)
