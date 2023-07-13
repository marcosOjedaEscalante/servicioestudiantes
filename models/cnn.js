import pkg from 'pg';
const { Pool } = pkg;

export default class Conexion {

    constructor() {
        this._pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'casoEstudiantes',
            password: 'root',
            port: '5432'
        });
    }

    obtenerConexion(){
        return this._pool;
    }

    cerrarConexion(){
        this._pool.end();
    }

}