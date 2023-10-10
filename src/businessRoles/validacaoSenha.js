
function validatePassword(password) {
    // Pelo menos 8 caracteres
    if (password.length <= 8) {
      return false;
    }

    // Pelo menos 1 caractere especial (caracteres não alfanuméricos)
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return false;
    }

    // Pelo menos 1 letra maiúscula
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    


    return true;
  }

export default validatePassword;
