import { Router } from "express";
import { readAll, readById } from "../controllers/estudiantes.js";

const routerEstudiantes = Router();

routerEstudiantes.get('/', readAll);

routerEstudiantes.post('/filtrarPorId', readById);

export{
    routerEstudiantes
}