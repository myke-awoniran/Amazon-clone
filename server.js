require('dotenv').config();

const App = require('./app');
const http = require('http');
const server = http.createServer(App);
const port = process.env.PORT || 5000;
const ConnectDB = require('./src/database/database-connection/connection');

async function Server() {
    const con = await ConnectDB();
    server.listen(port, () => {
        console.log(
            ` ${process.env.NODE_ENV} :::: App traffics on port  ${port} ${con.connection.host}`
        );
    });
}

Server();
