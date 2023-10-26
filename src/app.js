import "dotenv/config";
import cookieParser from "cookie-parser";
import express from 'express';
import createNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipularDeErros from './middlwares/manipularErros.js'
import manipularDe404 from "./middlwares/manipulador404.js";


const conexao = await createNaDatabase();
const app = express();
routes(app);

conexao.on('error', (erro) => {
  console.error('erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexão com bando feita com sucesso');
});

//Config JSON response
app.use(express.json());
app.use(cookieParser());



app.use(manipularDe404);
app.use(manipularDeErros);

export default app;
