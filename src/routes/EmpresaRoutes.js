import express from 'express';
import EmpresaController from '../controller/EmpresaController.js';

const routes = express.Router();

routes.get('/empresas', EmpresaController.listarEmpresa);
routes.get('/empresa/:id', EmpresaController.listarEmpresaPorId);
routes.post('/empresa', EmpresaController.cadastrarEmpresa);
routes.put('/empresa/:id', EmpresaController.atualizarEmpresa);
routes.delete('/empresa/:id', EmpresaController.excluirEmpresa);

export default routes;
