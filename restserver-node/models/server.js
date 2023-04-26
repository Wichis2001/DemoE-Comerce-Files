const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            usuarios : '/api/usuarios'
        }

        //!Middlewares Funciones que se ejecutan cuando levantemos el servidor
        this.middlewares();

        //?Conectar a base de datos
        this.conectarDB();

        //*Rutas de mi aplicación
        this.routes();
    };

    async conectarDB () {
        await dbConnection();
    }

    middlewares(){
        //?Cors
        this.app.use( cors() );

        //?Lectura y parseo del Body
        this.app.use(express.json());

        //?Directorio público
        this.app.use( express.static( 'public' ));
    }

    routes() {
        this.app.use( this.paths.usuarios, require('../routes/usuarios.routes') )
    };

    listen(){
        this.app.listen( this.port, () => console.log('Servidor corriendo en puerto', this.port) );
    };

}

module.exports = Server;