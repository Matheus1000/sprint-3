
function validateCPF(cpf) {
  // Remova caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, '');

    verificaDigitos(cpf);
    validacaoCPF(cpf);
    validacaoDigitos(cpf);
    return true;
}
// Verifique se o CPF tem 11 dígitos
function verificaDigitos(cpf){
  if (cpf.length !== 11) {
    return false;
  }
}

// Verifique se todos os dígitos são iguais (CPF inválido)
function validacaoCPF(cpf){
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
}

  // Validação dos dígitos verificadores
function validacaoDigitos(cpf){
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf[i - 1]) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf[9])) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf[i - 1]) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf[10])) {
    return false;
  }
}

export default validateCPF;
