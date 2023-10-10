import express from 'express';
import AuthController from '../controller/authController.js';

const routes = express.Router();


routes.get('/login', AuthController.login_get);
routes.post('/login', AuthController.login_post);



export default routes;