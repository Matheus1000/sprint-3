import mongoose from 'mongoose';
import validateCPF from '../businessRoles/validacaoCPF.js';
import isEmailValid from '../businessRoles/validacaoEmail.js';
import validatePhoneNumber from "../businessRoles/validacaoTelefone.js";
import validarSenha from "../businessRoles/validacaoSenhaCandidato.js";
import bcrypt from 'bcryptjs';


const candidatoSchema = new mongoose.Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { 
    type: String, 
    required: [true, "O nome do candidato é obrigatorio"] },
  cpf: { type: String, 
    required: [true, "O cpf é obrigatório "], 
    unique: true,
    validate: {
      validator: (valor) => {return validateCPF(valor);
    },
      message : 'Por favor, digite nesse formato: XXX.XXX.XXX-XX'
    }

  },
  telefone: { type: String, 
    required: [true, "O telefone é obrigatório"],
    validate: {
      validator: (valor) => {return validatePhoneNumber(valor);
    },
      message : 'Por favor, digite nesse formato: (DD) XXXXX-XXXX'
    }
  
  },
  vulnerabilidade: { type: String, 
      required: [true, "A vulnerabilidade é obigatória o cadastro" ],
      enum: 
    {
      values:["Pessoa com deficiência","Povos originários", "Baixa renda", "lgbtqiapn", "Pessoa negra"],
      message: "A vulnerabilidade fornecida não é um valor válido"
  }
},
  sexo: { type: String, 
        required: 
          [true,"Defina um opção válida"],
        enum: {
          values:['Masculino','Feminino', 'Não definido'],
          message: "Defina um opção"
        }
   },
  email: { type: String, 
    required: [true, "Digite um email válido"],
    unique: true,
    validate: {
      validator: (valor) => {return isEmailValid(valor);
    },
      message : 'Por favor, digite nesse formato: XXX@email.'
    }
  },
  senha: { type: String, 
    required: [true, "A senha é obrigatória"],
    validate: {
      validator: (valor) => {return validarSenha(valor);
    },
      message : 'Por favor, digite a senha neste formato: A primeira letra (A), seguida por 6 números e finalizando com (@)'
    }
  }

}, { versionKey: false });

/*

candidatoSchema.pre('save', async function(next) {

  const salt = await bcrypt.genSalt();
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

candidatoSchema.statics.login = async function(email, senha){

  const candidato = await this.findOne({ email})

  if(candidato){
   const auth = await bcrypt.compare(senha, candidato.senha);
   if(auth){
    return candidato
   }
   throw Error('Senha incorreta');

  }
  throw Error('Email incorreto');
}

*/
const candidato = mongoose.model('candidato', candidatoSchema);

export default candidato;
