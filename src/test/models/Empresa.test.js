import empresaController from "../../controller/EmpresaController.js";
import Empresa from "../../models/Empresa.js";
import { describe, expect,jest, it } from "@jest/globals";


describe('Testando o modelo empresa', ()=>{
    const nome = "Addison Alvarado";
    const cpf = "881.715.003-20";
    const email = "augue.ut.lacus@yahoo.ca";
    const senha = "B616630@";
    const descricao = "Reponsável por setor de T.I";

    const objetoEmpresa = {nome,cpf,email,senha,descricao}

    it('Deve instaciar uma nova empresa', () =>{
        const empresa = new Empresa(objetoEmpresa);
        expect(empresa).toEqual(
            expect.objectContaining(objetoEmpresa)
        );
    })


    it('Deve fazer uma chamada simulado ao BD', () => {
        empresaController.cadastrarEmpresa = jest.fn().mockReturnValue({
            id: 12,
            nome : "Addison Alvarado",
            cpf : "881.715.003-20",
            email : "augue.ut.lacus@yahoo.ca",
            senha : "B616630@",
            descricao : "Reponsável por setor de T.I",
        })

        const retorno = empresaController.cadastrarEmpresa();

        expect(retorno).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEmpresa,
                nome: expect.any(String),
                cpf: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
                descricao: expect.any(String)
            })
        );


    });
})

