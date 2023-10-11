import vaga from '../models/Vaga.js';

class VagasController {
  static async listarVagas(req, res) {
    try {
      const listaVagas = await vaga.find({});
      res.status(200).json(listaVagas);
    } catch (erro) {
      res.status(500).json({ message: `Falha na requisição: ${erro.message}` });
    }
  }

  static async listarVagasPorId(req, res) {
    try {
      const id = req.params.id;
      const vagaEncontrado = await vaga.findById(id);
      res.status(200).json(vagaEncontrado)
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarVagas(req, res) {
    try {
      const vagaEmpresa = await vaga.create(req.body);
      res.status(201).json({ message: 'criado com sucesso', vaga: vagaEmpresa });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar candidato` });
    }
  }

  static async atualizarVaga(req, res) {
    try {
      const vagaAtualizado = await vaga.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(vagaAtualizado.nome);
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirVaga(req, res) {
    try {
      const vagaDeletado = await vaga.findByIdAndDelete(req.params.id);
      res.send(vagaDeletado);
    } catch (erro) {
      next(erro);
    }
  }
}

export default VagasController;