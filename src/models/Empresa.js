import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const empresaSchema = new mongoose.Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true},
  cpf: { type: String, required: true , unique: true},
  email: { type: String, required: true, unique: true},
  senha: { type: String, required: true },
  descricao: { type: String, required: true },

}, { versionKey: false });

empresaSchema.pre('save', async function(next) {

  const salt = await bcrypt.genSalt();
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

empresaSchema.statics.login = async function(email, senha){

  const empresa = await this.findOne({ email})

  if(empresa){
   const auth = await bcrypt.compare(senha, empresa.senha);
   if(auth){
    return empresa
   }
   throw Error('Senha incorreta');

  }
  throw Error('Email incorreto');
}

const empresa = mongoose.model('empresa', empresaSchema);

export default empresa;
