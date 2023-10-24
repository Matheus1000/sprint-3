import validacaoTelefone from "../businessRoles/validacaoTelefone.js";

describe('Teste para verificar validacao de Telefone', ()=>{

    it('Deve retornar um telefone válido', ()=>{
        const telefoneMockado = "692935-2921"
        const retornado = validacaoTelefone(telefoneMockado);

        expect(retornado).toBeTruthy();
    })

})