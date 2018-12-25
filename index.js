const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const userRouter = require('./routes/userRoutes')
const adminRouter = require('./routes/adminRoutes')
const companyRouter = require('./routes/companyRoutes')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

//Body-Parser MiddelWar
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Mentor Link is Comming ')
})

app.listen(8080, () => {
    console.log('Server Lunched In Port 8080')
})