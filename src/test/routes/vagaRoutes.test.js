import app from '../../app.js';
import {beforeEach, afterEach, describe, expect, it,jest } from "@jest/globals";
import request from 'supertest';
import vagasController from "../../controller/VagasController.js";

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

function colocarMock(){
    vagasController.cadastrarVagas = jest.fn().mockReturnValue({
        nome: "Cielo",
        localizacao:"São Paulo",
        cargo:"Analista de Sistema",
        status:"Agendado",     
    })

    return vagasController.cadastrarVagas();

}
describe('GET em /vagas', ()=>{
    it('Deve retornar um lista de vagas', async () =>{
        await request(app)
            .get('/vagas')
            .set('Accept', 'application')
            .expect('content-type', /json/)
            .expect(200);
    });
});

let idResposta;
describe('Post em /vaga', ()=>{

    const mock = colocarMock();
    
    it('Deve adicionar uma nova vaga', async() => {

        const resposta = await request(app)
            .post('/vaga')
            .send(mock)
            .expect(201);

        idResposta = resposta.body.vaga["_id"];
        console.log(idResposta);
            
    });

    it('Deve nao adiocionar nada ao body vazio', async() => {
        await request(app)
            .post('/vaga')
            .send({})
            .expect(400);
    })
});



describe('/GET em /vaga/id', ()=>{
    it('Deve retornar recursos selecionados', async() =>{
        await request(app)
            .get(`/vaga/${idResposta}`)
            .expect(200);
    });
});


describe('PUT em /vaga/id', () => {
    test.each([
        ['nome', {nome: "Cielo"}],
        ['localizacao', {localizacao: "São Paulo"}],
        ['cargo', {cargo: "Analistas de Sistemas"}],
        ['status',{status: "Agendado"}]
    ])('Deve alterar o campo %s', async (chave, param) => {
      const requisicao = { request };
      const spy = jest.spyOn(requisicao, 'request');
      await requisicao.request(app)
        .put(`/vaga/${idResposta}`)
        .send(param)
        .expect(204);
  
      expect(spy).toHaveBeenCalled();
    });
  });

  
describe('DELETE em /vaga/id', () => {
    it('Deletar o recurso adcionado', async () => {
      await request(app)
        .delete(`/vaga/${idResposta}`)
        .expect(200);
    });
});

