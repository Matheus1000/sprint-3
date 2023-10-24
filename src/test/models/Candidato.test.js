import candidatoController from "../../controller/CandidatoController.js";
import Candidato from "../../models/Candidato.js"; 
import { describe, expect,jest, it } from "@jest/globals";

describe('Testando o modelo de candidato', ()=> {
    const nome = "Dylan Buck";
    const cpf = "202.714.524-87";
    const telefone = "15-466248339";
    const vulnerabilidade = "lgbtqiapn";
    const sexo = "Feminino";
    const senha = "A558434@";
    const email = "volutpat.nunc@hotmail.org";

    const objetoCandidato = {nome,cpf, telefone, vulnerabilidade,sexo, senha, email}

    it('Deve instaciar uma nova candidato', () =>{
        const candidato = new Candidato(objetoCandidato);
        expect(candidato).toEqual(
            expect.objectContaining(objetoCandidato)
        );
    })

    it('Deve fazer uma chamada simulado ao BD', () => {
        candidatoController.cadastrarCandidato = jest.fn().mockReturnValue({
            id: 10,
            nome: "Dylan Buck",
            cpf: "202.714.524-87",
            telefone: "15-466248339",
            vulnerabilidade: "lgbtqiapn",
            sexo: "Feminino",
            senha: "A558434@",
            email : "volutpat.nunc@hotmail.org",
        })

        const retorno = candidatoController.cadastrarCandidato();

        expect(retorno).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoCandidato,
                nome: expect.any(String),
                cpf: expect.any(String),
                telefone: expect.any(String),
                vulnerabilidade: expect.any(String),
                sexo: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
            })
        );


    });
})