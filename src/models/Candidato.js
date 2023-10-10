import mongoose from 'mongoose';
import validateCPF from '../businessRoles/validacaoCPF.js';
import isEmailValid from '../businessRoles/validacaoEmail.js';
import bcrypt from 'bcryptjs';


const candidatoSchema = new mongoose.Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true,
        validate: (valor) => {
          return validateCPF(valor);
        }
  },
  telefone: { type: String, required: true },
  vulnerabilidade: { type: String, required: true, enum: 
    {
      values:["Pessoa com Deficiiao","PovosOriginarios", "BaixaRenda", "lgbtqiapn+", "PessoasNegra"],
      message: "A vulnerabilidade fornecida não é um valor válido"
  }
},
  sexo: { type: String, required: true,
        enum: {
          values:["Heterossexual", "Homossexual", "Bissexual", "Assexual", "PanSexual", "Não me idetifico com oções acimas"],
          message: "Defina um opção"
        }
   },
  email: { type: String, required: true,unique: true,
    validate: (valor) => {
      return isEmailValid(valor);
    }
  },
  senha: { type: String, required: true}

}, { versionKey: false });

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


const candidato = mongoose.model('candidato', candidatoSchema);

export default candidato;
