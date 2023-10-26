import jwt from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret.js";


async function middlewareAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).send('Access token não informado');
  }
  
  const [,accessToken] = token.split(".")
 

  return next();


 
  
}

export default middlewareAuth;


