import express from 'express';
import VagasController from '../controller/VagasController.js';

const routes = express.Router();

routes.get('/vagas', VagasController.listarVagas);
routes.get('/vaga/:id', VagasController.listarVagasPorId);
routes.post('/vaga', VagasController.cadastrarVagas);
routes.put('/vaga/:id', VagasController.atualizarVaga);
routes.delete('/vaga/:id', VagasController.excluirVaga);
export default routes;
