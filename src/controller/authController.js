import candidato from "../models/Candidato.js";
import empresa from "../models/Empresa.js";

class AuthController{
         
    static login_get(req, res){
        res.send('login');
    };


    static async login_post(req, res){
        const {email, password} = req.body;

        try {
            // 1 para identificar candidato -- 2 para identificar empresa 
            const opcao = 1
            const candidatoValidacao = await candidato.login(email, password);
            const empresaValidacao = await empresa.login(email, password);

            if (opcao == 1){
               res.status(200).json({candidatoValidacao: candidatoValidacao._id})
            }else if(opcao == 2){
                res.status(200).json({candidatoValidacao: candidatoValidacao._id})
            }

            
        } catch (error) {
            res.status(400).json({});
        }
     };
}

export default AuthController;