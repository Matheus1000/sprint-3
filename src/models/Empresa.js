import mongoose from 'mongoose';
import validateCPF from '../businessRoles/validacaoCPF.js';
import isEmailValid from '../businessRoles/validacaoEmail.js';
import validarSenha from "../businessRoles/validacaoSenhaEmpresa.js";
import bcrypt from 'bcryptjs';


const empresaSchema = new mongoose.Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, require: true},
  cpf: { type: String, required: true , unique: true,
    validate: {
      validator: (valor) => {return validateCPF(valor);
    },
      message : 'Por favor, digite nesse formato: XXX.XXX.XXX-XX'
    }
  },
  email: { type: String, required: true, unique: true,
    validate: {
      validator: (valor) => {return isEmailValid(valor);
    },
      message : 'Por favor, digite nesse formato: XXX@email.'
    }
  },
  senha: { type: String, required: true,
    validate: {
      validator: (valor) => {return validarSenha(valor);
    },
      message : 'Por favor, digite nesse formato: A primeira letra (B), seguida por 6 números e finalizando com (@)'
    }
  },
  descricao: { type: String},

}, { versionKey: false });

//funcao utilizada para após a criação no banco de dados
empresaSchema.pre('save',async function(next){

  const salt = await bcrypt.genSalt();
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

// Método estático para logar na aplicação 

empresaSchema.statics.login = async function(email, senha){

  const empresa = await this.findOne({email});

  if(empresa){
    const auth = await bcrypt.compare(senha, empresa.senha);
    if(auth){
      return empresa;
    }
    throw  Error('Senha incorreta');
  }
  throw  Error('Email incorreto');
}

const Empresa = mongoose.model('empresa', empresaSchema);

export default Empresa;
