import jwt from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret.js";
import candidato from "../models/Candidato.js";


async function middlewareAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).send('Access token não informado');
  }
  
  try{
    const decode = jwt.verify(token, `${jsonSecret}`);
    req.candidato = await candidato.findById(decode.id);
    next();
  }catch(error){
    return res.status(401).send('Usúario invalido');
  }
  
  
}

export default middlewareAuth;


