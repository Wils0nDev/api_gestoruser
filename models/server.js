const express = require('express')
const path = require("path");
const { db } = require('../database/config');
// const cors = require('cors')
// const { options } = require('../doc/swagger')
//  const swaggerUi = require('swagger-ui-express');
//  const swaggerJsDoc = require('swagger-jsdoc');

 
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // this.productsPath = '/api/products';
         this.usersPath = '/api/users';
        // this.loginPath = '/api/auth'
        this.connect();
        //Middlewares
        // this.middlewares();
        //Rutas de mi aplicacion 
         this.routes();

    }



    routes(){
        // this.app.use(this.productsPath, require('../routes/products'))
         this.app.use(this.usersPath, require('../routes/user'))
        // this.app.use(this.loginPath, require('../routes/auth'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor levantado', this.port)
        })
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //lectura y parsel del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
        //swagger
        this.app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)))
    }

    async connect(){
        
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    
}

module.exports =  Server;