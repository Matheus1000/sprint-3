import express from 'express';
import AuthController from '../controller/authController.js';

const routes = express.Router();

routes.post('/loginCandidato', AuthController.loginCandidato);
routes.post('/loginEmpresa', AuthController.loginEmpresa);


export default routes;