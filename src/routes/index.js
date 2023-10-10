import express from 'express';
import candidatos from './CandidatoRoutes.js';
import empresas from './EmpresaRoutes.js';
import auth from './authRoutes.js';


const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Projeto EveryMind'));

  app.use(express.json(), candidatos,empresas, auth);
};

export default routes;
