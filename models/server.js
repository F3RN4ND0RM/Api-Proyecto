import 'dotenv/config';

import db from '../db/db.js';
import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user.routes.js';
import citasRoutes from '../routes/citas.routes.js';
import casosRoutes from '../routes/casos.routes.js';
import biblioRoutes from '../routes/biblio.routes.js';



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
        this.app.use("/api", [userRoutes,citasRoutes, casosRoutes, biblioRoutes] )        
        
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

export default Server;
