import empresa from '../models/Empresa.js';

class EmpresaController {
  static async listarEmpresa(req, res, next) {
    try {
      const listarempresa = await empresa.find({});
      res.status(200).json(listarempresa);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarEmpresaPorId(req, res, next) {
    try {
      const id = req.params.id;
      const empresaEncontrado = await empresa.findById(id);
      res.status(200).json(empresaEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarEmpresa(req, res, next) {
    try {
      const novoEmpresa = await empresa.create(req.body);
      res.status(201).json({ message: 'criado com sucesso', empresa: novoEmpresa });
    } catch (erro) {
      next(erro)
    }
  }

  static async atualizarEmpresa(req, res, next) {
    try {
      const empresaAtualizado = await empresa.findByIdAndUpdate(req.params.id, req.body);
      res.status(204).send(empresaAtualizado.nome);
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirEmpresa(req, res, next) {
    try {
      const empresaDeletado = await empresa.findByIdAndDelete(req.params.id);
      res.send(empresaDeletado);
    } catch (erro) {
      next(erro);
    }
  }
}

export default EmpresaController;
