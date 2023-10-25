import app from '../../app.js';
import {beforeEach, afterEach, describe, expect, it,jest } from "@jest/globals";
import request from 'supertest';
import empresaController from "../../controller/EmpresaController.js";

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

function colocarMock(){
    empresaController.cadastrarEmpresa = jest.fn().mockReturnValue({
        nome : "Addison Alvarado",
        cpf : "802.947.750-30",
        email : "giga5654@uorak.com",
        senha : "B616630@",
        descricao : "Reponsável por setor de T.I",
    })

    return empresaController.cadastrarEmpresa();

}

describe('GET em /empresas', ()=>{
    it('Deve retornar um lista de vagas', async () =>{
        await request(app)
            .get('/empresas')
            .set('Accept', 'application')
            .expect('content-type', /json/)
            .expect(200);
    });
});


let idResposta;
describe('Post em /empresa', ()=>{

    const mock = colocarMock();

    it('Deve adicionar uma nova empresa', async() => {

        const resposta = await request(app)
            .post('/empresa')
            .send(mock)
            .expect(201);

        idResposta = resposta.body.empresa["_id"];
        console.log(idResposta);
            
    });

    it('Deve nao adiocionar nada ao body vazio', async() => {
        await request(app)
            .post('/empresa')
            .send({})
            .expect(400);
    })
});



describe('/GET em /empresa/id', ()=>{
    it('Deve retornar recursos selecionados', async() =>{
        await request(app)
            .get(`/empresa/${idResposta}`)
            .expect(200);
    });
});


describe('PUT em /empresa/id', () => {
    test.each([
        ['nome', {nome: "José"}]
    ])('Deve alterar o campo %s', async (chave, param) => {
      const requisicao = { request };
      const spy = jest.spyOn(requisicao, 'request');
      await requisicao.request(app)
        .put(`/empresa/${idResposta}`)
        .send(param)
        .expect(204);
  
      expect(spy).toHaveBeenCalled();
    });
  });


describe('DELETE em /empresa/id', () => {
    it('Deletar o recurso adcionado', async () => {
      await request(app)
        .delete(`/empresa/${idResposta}`)
        .expect(200);
    });
});


