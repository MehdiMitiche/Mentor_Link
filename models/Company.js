const mongoose = require('mongoose')
const Schema = mongoose.Schema
const companySchema = new Schema({
    username: {
        type: String,
        required: 'username is require'
    },
    email: {
        type: String,
        required: 'Name is require',
        required: [true, 'Your email is required '],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'password is require'
    },
    phoneNumber: {
        type: String,
        required: 'Name is require'
    },
    field: {
        type: String,
        required: 'field is required'
    },
    description : {
    	type : String , 
    	required : 'description of the copany' 
    },
    ///////////////////////////////////
    location : {
    	type : String
    },
    offers : {
    	type : String 
    }
})


module.exports = companySchema