import pkg from 'pg';
const { Pool } = pkg;

const entregarConexion = () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'casoEstudiantes',
        password: 'root',
        port: '5432'
    });
    return pool;
}

export{
    entregarConexion
}