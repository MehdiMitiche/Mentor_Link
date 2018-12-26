const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({
    lastname: {
        type: String,
        required: 'Name is require'
    },
    firstname: {
        type: String,
        required: 'Name is require'
    },
    email: {
        type: String,
        required: 'Name is require',
        required: [true, 'Your email is required '],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: 'username is require'
    },
    password: {
        type: String,
        required: 'password is require'
    },
    phoneNumber: {
        type: String,
        required: 'Name is require'
    }
})


module.exports = adminSchema