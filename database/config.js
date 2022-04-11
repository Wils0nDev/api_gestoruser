const { Client } = require('pg')

const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
  })
  
const dbConnection = async() =>{

    try {

        client.connect(function(err) {
            if (err) throw err;
            console.log("Connectado a POSTGRESSQL");
    });
        
       console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
       throw new Error('Error al iniciar la base de datos')
        
    }
}

module.exports = {
    dbConnection
}