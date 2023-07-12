import { entregarConexion } from '../cnn/cnn.js';

const create = async (id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso) => {
    const query = {
        text: `INSERT INTO estudiante(id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        values: [id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso],
    }
    try{
        const pool = entregarConexion();
        const res = await pool.query(query);
        return res.rows;
    }catch(err){
        console.log('Error en create service estudiantes: ', err.message);
        return {
            mensaje: err.message
        };
    }
}

const readAll = async () => {
    try{
        const pool = entregarConexion();
        const res = await pool.query('SELECT * FROM estudiante');
        return res.rows;
    }catch(err){
        console.log('Error en readAll services estudiates: ', err.message);
        return {
            mensaje: err.message
        };
    }
}

const readById = async (id_estudiante) => {
    const query = {
        text: `SELECT * FROM estudiante WHERE id_estudiante = $1`,
        values: [id_estudiante],
    }
    try{
        const pool = entregarConexion();
        const res = await pool.query(query);
        return res.rows;
    }catch(err){
        console.log('Error en readById service estudiantes: ', err.message);
        return {
            mensaje: err.message
        };
    }
}

const update = async (id_estudiante, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso) => {
    const query = {
        text: `UPDATE estudiante
        SET nombre = $1, apellido_pat = $2, apellido_mat = $3, direccion = $4, codigo_comuna = $5, codigo_curso = $6
        WHERE id_estudiante = $7 RETURNING *`,
        values: [nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso, id_estudiante]
    }
    try{
        const pool = entregarConexion();
        const res = await pool.query(query);
        return res.rows;
    }catch(err){
        console.log('Error en update service estudiantes: ', err.message);
        return {
            mensaje: err.message
        };
    }
}

const deleteById = async (id_estudiante) => {
    const query = {
        text: `DELETE FROM estudiante WHERE id_estudiante = $1 RETURNING *`,
        values: [id_estudiante],
    }
    try{
        const pool = entregarConexion();
        const res = await pool.query(query);
        return res.rows;
    }catch(err){
        console.log('Error en deleteById service estudiantes: ', err.message);
        return {
            mensaje: err.message
        };
    }
}

const res = await deleteById(703);
console.log(res);