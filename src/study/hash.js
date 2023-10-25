
import {createHash} from 'crypto';

function criarHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criarHash("Uma String"));


class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criarHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash == criarHash(senha)){
            console.log("Usuário cadastrado com sucesso");
            return true;
        }

        console.log("Usuário ou senha incorretos");
        return false;
    }
}

const usuario = new Usuario('Matheus Costa', 'minhaSenha')

console.log(usuario)


//Caso de sucesso
usuario.autentica('Matheus Costa', 'minhaSenha')