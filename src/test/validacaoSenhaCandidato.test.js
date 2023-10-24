import validarSenha from "../businessRoles/validacaoSenhaCandidato.js";


describe('Teste para verificar validacao de senha', ()=>{

    it('Deve retornar um senha válido', ()=>{
        const senhalValido = "A123456@"
        const retornado = validarSenha(senhalValido);

        expect(retornado).toBeTruthy();
    })

})