import validateCPF from "../businessRoles/validacaoCPF.js";
import isEmailValid from "../businessRoles/validacaoEmail.js";
import validarSenhaCan from "../businessRoles/validacaoSenhaCandidato.js";
import validarSenhaEmp from "../businessRoles/validacaoSenhaEmpresa.js";
import validatePhoneNumber from "../businessRoles/validacaoTelefone.js";

describe('Teste para verificar os campos de entrada do usuario', ()=>{

    it('Deve retornar um CPF válido', ()=>{

        const cpfMockado = "853.440.120-98"
        const esperado = true;
        const retornado = validateCPF(cpfMockado);
    
        expect(retornado).toBe(esperado);
    })

    it('Deve retornar um Email válido', ()=>{

        const emailMockado = "yoel451@uorak.com"
        const esperado = true;
        const retornado = isEmailValid(emailMockado);
    
        expect(retornado).toBe(esperado);
    })

    it('Deve retornar uma senha válida do candidato', ()=>{

        const senhaCandidato = "A123456@"
        const esperado = true;
        const retornado = validarSenhaCan(senhaCandidato);
    
        expect(retornado).toBe(esperado);
    })

    it('Deve retornar uma senha válida da funcionário da empresa', ()=>{

        const senhaEmpresa = "B123456@"
        const esperado = true;
        const retornado = validarSenhaEmp(senhaEmpresa);
    
        expect(retornado).toBe(esperado);
    })

    it('Deve retornar um telefone válido', ()=>{

        const senhaEmpresa = "833383-4218"
        const esperado = true;
        const retornado = validatePhoneNumber(senhaEmpresa);
    
        expect(retornado).toBe(esperado);
    })

})