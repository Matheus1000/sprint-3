import Errobase from "./Errobase.js";

class NaoEncontrado extends Errobase{

    constructor(messagem = "Página não encotrada"){
        super(messagem, 404)
    }
}

export default NaoEncontrado;