const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')

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

//VerifyTokenMiddelware
const verifyToken = (req, res, next) => {
    //get Auth HeaderValue
    const bearerHeader = req.headers['x-access-token']
    if (typeof(bearerHeader) !== 'undefined') {
        //Format Of Token
        //Authorization : Bearer <Token>
        const bearer = bearerHeader.split(' ')
        const access_token = bearer[1]
        req.token = access_token
        next()
    } else {
        //Forbiden
        res.sendStatus(403)
    }
}

app.get('/', (req, res) => {
    res.send('Mentor Link is Comming ')
})

//authentification Needed
app.get('/post', verifyToken, (req, res) => {

	jwt.verify(req.token , 'SecretKeyHere' , (err , decoded) => {
		if(err){
			res.json({
				err : err
			})
		}else{
			res.json({
				decoded : decoded
			})
		}
	})

})

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/company' , companyRouter)

app.listen(8080, () => {
    console.log('Server Lunched In Port 8080')
})