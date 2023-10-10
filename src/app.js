import express from 'express';
import createNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipularDeErros from './middlwares/manipularErros.js'


const conexao = await createNaDatabase();
const app = express();
routes(app);

conexao.on('error', (erro) => {
  console.error('erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexão com bando feita com sucesso');
});

app.use(manipularDeErros);

export default app;
