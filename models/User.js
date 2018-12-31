const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const userSchema = new Schema({
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
    },
    fieldOfStudy: {
        type: String,
        required: 'field Of Study is required'
    },
    //////////////
    interst : {
    	type : String 
    },
    Resedance : {
    	type : String 
    },
    documents : {
    	type : String
    }
})

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


module.exports = User = mongoose.model('User', userSchema)