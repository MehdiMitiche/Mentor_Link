const mongoose = require('mongoose')
const userSchema = require('../models/User')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User', userSchema)


//CRUD OPERATIONS
const getUser = (req, res) => {
    const query = {}
    User.find(query, (err, users) => {
        res.json({ users })
    })
}

const addUser = (req, res) => {

}

const updateUser = (req, res) => {
    req.checkBody('firstname', 'The first name is required').notEmpty();
    req.checkBody('lastname', 'The last name is required').notEmpty();
    req.checkBody('username', 'The username is required').notEmpty();
    req.checkBody('email', 'The email is required').notEmpty();
    req.checkBody('phoneNumber', 'The phoneNumber is required').notEmpty();
    req.checkBody('fieldOfStudy', 'The fieldOfStudy is required').notEmpty();

    const err = req.validationErrors()
    if (err) {
        res.json({
            err: err[0].msg
        })
    } else {
        const userData = {
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            username: req.body.username,
            email: req.body.email,
            fieldOfStudy: req.body.fieldOfStudy,
            phoneNumber: req.body.phoneNumber,
        }
        const query = {_id :req.params.id}
        User.update(query, userData, (err, user) => {
            if (err) {
                res.json(err)
            } else {
                res.json({
                    user
                })
            }
        })
    }

}

const deleteUser = (req, res) => {

}

const register = (req, res) => {
    req.checkBody('firstname', 'The first name is required').notEmpty();
    req.checkBody('lastname', 'The last name is required').notEmpty();
    req.checkBody('username', 'The username is required').notEmpty();
    req.checkBody('email', 'The email is required').notEmpty();
    req.checkBody('phoneNumber', 'The phoneNumber is required').notEmpty();
    req.checkBody('fieldOfStudy', 'The fieldOfStudy is required').notEmpty();
    req.checkBody('password', 'The password is required').notEmpty();
    req.checkBody('passwordConf', "Password don't match").equals(req.body.password);


    const err = req.validationErrors()

    if (err) {
        res.json({
            err: err[0].msg
        })
    } else {
        const userData = {
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            username: req.body.username,
            email: req.body.email,
            fieldOfStudy: req.body.fieldOfStudy,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }
        const newUser = new User(userData)
        newUser.save((err, user) => {

            if (err) {
                res.json({
                    err: 'Error saving User'
                })
            } else {
                res.json({
                    user
                })
            }
        })
    }
}
const login = (req, res) => {
    //Username and password in the req.body
    //...
    //Confirming the user from the database with passport JS
    const user = {
        id: 2,
        username: 'Mehdi_',
        password: 'root',
        user: true
    }

    //Creating the Token
    jwt.sign(user, 'SecretKeyHere', {
        expiresIn: '1h'
    }, (err, token) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json(token)
        }
    })
}

module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    register,
    login
}