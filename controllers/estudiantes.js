import { readAllService, readByIdService } from "../service/estudiantes.js"

const create = (req, res) => {

}

const readAll = async (req, res) => {
    const datos = await readAllService();
    res.render('index', {
        datos
    });
}

const readById = async (req, res) => {
    const idEstudiante = req.body.idEstudiante;
    const datos = await readByIdService(idEstudiante);
    res.render('index', {
        datos
    });
}

const update = (req, res) => {

}

const deleteById = (req, res) => {

}

export{
    readAll,
    readById,
    create,
    update,
    deleteById
}