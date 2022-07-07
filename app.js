const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet=require('helmet')
const { urlencoded } = require('body-parser');
const ErrorHandler = require('./src/Exceptions/global')
const Home=require('./src/controllers/homeController')
const app = express();


app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', Home.HomeController)

// app.use('*', (req, res) => {
//     return res.status(200).json({
//         status: 'fail',
//         message:
//     })
// })

app.use(ErrorHandler)
module.exports=app