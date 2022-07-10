const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet = require('helmet')
const version_1=require('./src/routers/router')
const ErrorHandler = require('./src/Exceptions/global')
const Home=require('./src/controllers/homeController')
const app = express();

app.use(cors())

app.use(helmet())

app.use(bodyParser.json())

app.use(morgan('combined'))

app.get('/', Home.HomeController)

app.use(version_1)

app.use('*', Home.UndefinedRoutes)

app.use(ErrorHandler)

module.exports=app