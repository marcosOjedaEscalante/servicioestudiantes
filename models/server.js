import express from 'express';
import { routerEstudiantes } from '../routes/estudiantes.js';

export default class Server{
    
    constructor(){
        // aplicación
        this.app = express();
        //definición de puerto con dotenv
        this.port = process.env.PORT;

        // llamado a los middlewares
        this.middlewares();

        // llamado a las rutas
        this.routes();
    }

    // Middlewares
    middlewares(){
        this.app.set('view engine', 'hbs');
        this.app.use(express.urlencoded({extended:true}));
    }

    // rutas
    routes(){
        this.app.use('/estudiantes', routerEstudiantes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor levantado en el puerto: ', this.port);
        });
    }

}