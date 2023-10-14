import Errobase from "./Errobase.js";

class RequisicaoIncorreta extends Errobase{

    constructor(messagem = "Um ou mais dados fornecidos estão incorretos"){
        super(messagem, 400);
    }
}

export default RequisicaoIncorreta;