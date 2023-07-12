import { entregarConexion } from '../cnn/cnn.js';

const create = async (id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso) => {
    /* INSERT INTO estudiante(id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso)
    VALUES (704, '4000000-0', 'probando pg_admin', 'probando pg_admin', 'probando pg_admin', 'direc_pg_admin', 322, '0047'); */
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
        console.log('Error en create: ', err);
        return {};
    }
}

create(711, '4000000-0', 'probando pg_admin', 'probando pg_admin', 'probando pg_admin', 'direc_pg_admin', 322, '0047');

const readAll = () => {

}

const readById = (id_estudiante) => {

}

const update = (id_estudiante, rut, nombre, apellido_pat, apellido_mat, direccion, codigo_comuna, codigo_curso) => {

}

const deleteById = (id_estudiante) => {

}