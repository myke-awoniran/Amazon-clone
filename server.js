require('dotenv').config()
const App = require('./app')
const http = require('http')
const server = http.createServer(App)
const port = process.env.PORT || 5000
const ConnectDB=require('./src/database/database-connection/connection')


async function Server() {
    await ConnectDB()
    server.listen(port, () => {
        console.log(` ${process.env.NODE_ENV}:::: Amazon-API running on port ${port}`)
    })
}

Server()