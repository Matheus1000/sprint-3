import NaoEncontrado from '../error/NaoEncontrado.js';
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
      if (candidatoEncontrado !== null){
        res.status(200).json(candidatoEncontrado);
      }else{
        next(new NaoEncontrado("Id não encontrado"));
      }
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
      if (candidatoAtualizado !== null){
        res.status(200).json(candidatoAtualizado);
      }else{
        next(new NaoEncontrado("Id não encontrado"));
      }
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

  static listarVulnerabidade = async(req, res, next) =>{


    try {
      const {vulnerabilidade} = req.query;

      const busca = {};

      
      if(vulnerabilidade) busca.vulnerabilidade = {$regex: vulnerabilidade, $options: "i"};


      const candidatoEncontrado = await candidato.find(busca);

      res.json(candidatoEncontrado);
    } catch (erro) {
      next(erro);
    }

  }

  static verificarVulnerabilidade = async(req, res, next) =>{


    try {
      const {nome, cpf , email} = req.query;

      const busca = {};

      if (cpf) busca.cpf = cpf;
      if (email) busca.email = email;
      if(nome) busca.nome = {$regex: nome, $options: "i"};


      const candidatoEncontrado = await candidato.find(busca);

      res.json(candidatoEncontrado);
    } catch (erro) {
      next(erro);
    }

  }
  
}

export default CandidatoController;
