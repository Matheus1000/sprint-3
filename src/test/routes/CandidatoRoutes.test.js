import app from '../../app.js';
import {beforeEach, afterEach, describe, expect, it,jest } from "@jest/globals";
import request from 'supertest';
import candidatoController from "../../controller/CandidatoController.js";

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

function colocarMock(){
    candidatoController.cadastrarCandidato = jest.fn().mockReturnValue({
        nome: "Matheus Costa",
        cpf: "303.942.350-96",
        telefone: "692935-2921",
        vulnerabilidade: "lgbtqiapn",
        sexo: "Feminino",
        senha: "A558434@",
        email : "hobert9583@uorak.com",
    })

    return candidatoController.cadastrarCandidato();

}

describe('GET em /candidatos', ()=>{
    it('Deve retornar um lista de vagas', async () =>{
        await request(app)
            .get('/candidatos')
            .set('Accept', 'application')
            .expect('content-type', /json/)
            .expect(200);
    });
});


let idResposta;
describe('Post em /candidato', ()=>{

    const mock = colocarMock();

    console.log(mock);

    it('Deve adicionar uma nova candidato', async() => {

        const resposta = await request(app)
            .post('/candidato')
            .send(mock)
            .expect(201);

        idResposta = resposta.body.candidato["_id"];
        console.log(idResposta);
            
    });

    it('Deve nao adiocionar nada ao body vazio', async() => {
        await request(app)
            .post('/candidato')
            .send({})
            .expect(400);
    })
});



describe('/GET em /candidato/id', ()=>{
    it('Deve retornar recursos selecionados', async() =>{
        await request(app)
            .get(`/candidato/${idResposta}`)
            .expect(200);
    });
});


describe('PUT em /candidato/id', () => {
    test.each([
        ['nome', {nome: "José"}]
    ])('Deve alterar o campo %s', async (chave, param) => {
      const requisicao = { request };
      const spy = jest.spyOn(requisicao, 'request');
      await requisicao.request(app)
        .put(`/candidato/${idResposta}`)
        .send(param)
        .expect(204);
  
      expect(spy).toHaveBeenCalled();
    });
  });


describe('DELETE em /candidato/id', () => {
    it('Deletar o recurso adcionado', async () => {
      await request(app)
        .delete(`/candidato/${idResposta}`)
        .expect(200);
    });
});

