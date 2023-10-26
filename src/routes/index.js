import express from 'express';
import candidatos from './CandidatoRoutes.js';
import empresas from './EmpresaRoutes.js';
import vagas from './VagasRoutes.js';
import auth from './authRoutes.js';


//Open Route - Public
const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Projeto EveryMind'));

  app.use(express.json(),vagas,auth, candidatos,empresas);
};

export default routes;
