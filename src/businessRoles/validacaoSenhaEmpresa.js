function validarSenha(senha) {
  // Verifica se a senha tem pelo menos 8 caracteres
  if (senha.length < 8) {
      return false;
  }

  // Verifica se a senha começa com a letra 'A'
  if (senha[0] !== 'B') {
      return false;
  }

  // Verifica se a senha contém exatamente 6 números
  if ((senha.match(/\d/g) || []).length !== 6) {
      return false;
  }

  // Verifica se a senha termina com '@'
  if (senha.slice(-1) !== '@') {
      return false;
  }

  // Se a senha passar por todas as verificações, é válida
  return true;
}

export default validarSenha;
