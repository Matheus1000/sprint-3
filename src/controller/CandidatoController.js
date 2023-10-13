import candidato from '../models/Candidato.js';


class CandidatoController {
  static async listarCandidato(req, res, next) {
     
    const {limite = 5, pagina  = 1} = req.query;


    try {
      const listarCandidato = await candidato.find({})
      .skip((pagina - 1) * limite)
      .limit(limite);
      res.status(200).json(listarCandidato);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarCandidatoPorId(req, res, next) {
    try {
      const id = req.params.id;
      const candidatoEncontrado = await candidato.findById(id);
      res.status(200).json(candidatoEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarCandidato(req, res, next) {
    try {
      const novoCandidato = await candidato.create(req.body);
      res.status(201).json({ message: 'criado com sucesso', candidato: novoCandidato });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarCandidato(req, res, next) {
    try {
      const candidatoAtualizado = await candidato.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(candidatoAtualizado.nome);
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirCandidato(req, res, next) {
    try {
      const candidatoDeletado = await candidato.findByIdAndDelete(req.params.id);
      res.send(candidatoDeletado);
    } catch (erro) {
      next(erro);
    }
  }

  
}

export default CandidatoController;
