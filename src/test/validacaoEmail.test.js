import isEmailValid from "../businessRoles/validacaoEmail";


describe('Teste para verificar validacao de email', ()=>{

    it('Deve retornar um email válido', ()=>{
        const emailValido = "shumei8417@uorak.com"
        const retornado = isEmailValid(emailValido);

        expect(retornado).toBeTruthy();
    })

})