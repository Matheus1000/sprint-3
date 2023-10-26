import jwt  from "jsonwebtoken";
import candidato from "../models/Candidato.js";
import empresa from "../models/Empresa.js";
import jsonSecret from "../config/jsonSecret.js";

const maxAge = 864000;
function createToken(id, email, senha){
    return jwt.sign({id, email, senha}, `${jsonSecret}`, {
        expiresIn: maxAge, 
    })
}

const handleErrors = (err) =>{
    console.log(err.message, err.code);

    let errors = {email: '', senha: ''};
    
    if(err.message === 'Email incorreto'){
        errors.email = "Este email não está cadastrada";
    }

    if(err.message === 'Senha incorreta'){
        errors.senha = "Este senha não está cadastrada";
    }

    return errors

}
class AuthController{
    static async loginCandidato(req, res, next){

        const {email, senha} = req.body;
    
        
        try{
            const candidatoEncontrado = await candidato.login(email, senha);
            const token = createToken(candidatoEncontrado._id, candidatoEncontrado.email, candidatoEncontrado.senha); 
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 3})
            res.status(200).json(token);
        }catch(erro){
            const erros = handleErrors(erro);
            res.status(400).json({erros})
        }
    
    }
    static async loginEmpresa(req, res, next){

        const {email, senha} = req.body;
        
        try{
            const empresaEncontrado = await empresa.login(email, senha);
            const token = createToken(empresaEncontrado._id, empresaEncontrado.email, empresaEncontrado.senha); 
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 3})
            res.status(200).json(token);
        }catch(erro){
            const erros = handleErrors(erro);
            res.status(400).json({erros})
        }
    
    }

    
}
export default AuthController;