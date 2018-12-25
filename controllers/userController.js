const mongoose = require('mongoose')
const UserSchema = require('../models/User')
const jwt = require('jsonwebtoken')



//CRUD OPERATIONS
const getUser = (req, res) => {

}

const addUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

const register = (req, res) => {

}

const login = (req, res) => {
    //Username and password in the req.body
    //...
    //Confirming the user from the database with passport JS
    const user = {
        id: 1,
        username: 'Mehdi_Mitiche',
        password: 'root'
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