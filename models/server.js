require('dotenv').config();


const db = require('../db/db')
const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/user.routes')
const citasRoutes = require('../routes/citas.routes')
const casosRoutes = require('../routes/casos.routes')


class Server {
    app; 
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //MIDDLEWARES
        this.middlewares();
        //ROUTES
        this.routes();
        //Databas
        this.dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        //***serializar jsons
        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use("/api", [userRoutes,citasRoutes, casosRoutes] )        
        
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`)
        })
    }

    

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database online');

        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = Server;
