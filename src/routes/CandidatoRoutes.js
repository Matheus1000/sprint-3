import express from 'express';
import CandidatoController from '../controller/CandidatoController.js';
import autentificacao from '../middlwares/autentification.js';


const routes = express.Router();

routes.use(autentificacao);

routes.get('/candidatos', CandidatoController.listarCandidato);
routes.get('/candidato/busca', CandidatoController.listarVulnerabilidade);
routes.get('/candidato/verificar', CandidatoController.verificarVulnerabilidade);
routes.get('/candidato/:id', CandidatoController.listarCandidatoPorId);
routes.post('/candidato', CandidatoController.cadastrarCandidato);
routes.put('/candidato/:id', CandidatoController.atualizarCandidato);
routes.delete('/candidato/:id', CandidatoController.excluirCandidato);
export default routes;
