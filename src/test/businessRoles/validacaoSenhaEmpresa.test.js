import validarSenha from "../../businessRoles/validacaoSenhaEmpresa.js";


describe('Teste para verificar validacao de senha', ()=>{

    it('Deve retornar um senha válido', ()=>{
        const senhalValido = "B123456@"
        const retornado = validarSenha(senhalValido);

        expect(retornado).toBeTruthy();
    })

})