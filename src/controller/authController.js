import candidato from "../models/Candidato.js";
import empresa from "../models/Empresa.js";


class AuthController{
    static async loginCandidato(req, res, next){

        const {email, senha} = req.body;
    
        
        try{
            const candidatoEncontrado = await candidato.login(email, senha);

            res.status(200).json(candidatoEncontrado);
        }catch(erro){
            res.status(400).json({})
        }
    
    }
    static async loginEmpresa(req, res, next){

        const {email, senha} = req.body;
        
        try{
            const empresaEncontrado = await empresa.login(email, senha);

            res.status(200).json(empresaEncontrado);
        }catch(erro){
            res.status(400).json({})
        }
    
    }

    
}

export default AuthController;