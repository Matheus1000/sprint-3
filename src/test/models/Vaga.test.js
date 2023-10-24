import vagasController from "../../controller/VagasController.js";
import Vaga from "../../models/Vaga.js";
import { describe, expect,jest, it } from "@jest/globals";


describe('Testando o modelo Vaga', () =>{
    const nome = 'Cielo';
    const localizacao = 'São Paulo';
    const cargo = 'Analista de Sistema';
    const status = 'Agendado';

     const objetoVaga = {nome,localizacao, cargo, status}
   

    it('Deve instaciar uma nova vaga', () =>{
        const vaga = new Vaga(objetoVaga);
        expect(vaga).toEqual(
            expect.objectContaining(objetoVaga)
        );
    })

    //Apenas para meu estudo 
    it.skip('Deve salvar vaga no Banco de dados', async () =>{

        const dados = await vagasController.cadastrarVagas();

        const retornado = await vagasController.listarVagasPorId(dados.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoVaga,
                nome: expect.any(String),
                localizacao: expect.any(String),
                cargo: expect.any(String),
                status: expect.any(String),
            })
        )

    })

    it('Deve fazer uma chamada simulado ao BD', () => {
        vagasController.cadastrarVagas = jest.fn().mockReturnValue({
            id: 12,
            nome: "Cielo",
            localizacao:"São Paulo",
            cargo:"Analista de Sistema",
            status:"Agendado",     
        })

        const retorno = vagasController.cadastrarVagas();

        expect(retorno).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoVaga,
                nome: expect.any(String),
                localizacao: expect.any(String),
                cargo: expect.any(String),
                status: expect.any(String),
            })
        );


    });
});

