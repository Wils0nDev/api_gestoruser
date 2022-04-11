//importamos
require('dotenv').config();

//instanciamos nuestro server 
const Server = require('./models/server');
const server = new Server();


server.listen();
