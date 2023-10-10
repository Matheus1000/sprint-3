import mongoose from 'mongoose';

const vagaSchema = new mongoose.Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  localizacao: { type: String, required: true},
  cargo: { type: String, required: true},
  status: { type: String, required: true,
    enum: {
      values:['Inscreva-se ','Agendado', 'Finalizado'],
      message: "Defina um opção"
    }
  },

}, { versionKey: false });

const vaga = mongoose.model('vaga', vagaSchema);

export default vaga;