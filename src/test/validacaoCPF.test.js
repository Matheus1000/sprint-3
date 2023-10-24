import validateCPF from "../businessRoles/validacaoCPF.js";

describe('Teste para verificar validacao de CPF', ()=>{

    it('Deve retornar um CPF válido', ()=>{
        const cpfMockado = "161.832.720-86"
        const retornado = validateCPF(cpfMockado);

        expect(retornado).toBeTruthy();
    })

})