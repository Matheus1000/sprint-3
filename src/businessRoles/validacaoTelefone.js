function validatePhoneNumber(phoneNumber) {
    // Remova todos os caracteres que não sejam dígitos
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Verifique se o número tem 10 ou 11 dígitos (incluindo o DDD)
    if (cleanedNumber.length === 10 || cleanedNumber.length === 11) {
      // Se tiver 11 dígitos, o primeiro deve ser 0 (código de longa distância)
      if (cleanedNumber.length === 11 && cleanedNumber.charAt(0) !== '0') {
        return false;
      }

      // Verifique se o DDD é válido (dois primeiros dígitos)
      const ddd = cleanedNumber.substring(0, 2);
      const validDDDs = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'];
      if (!validDDDs.includes(ddd)) {
        return false;
      }

      // Verifique se os dígitos restantes são numéricos
      const remainingDigits = cleanedNumber.substring(2);
      if (!/^\d+$/.test(remainingDigits)) {
        return false;
      }

      return true;
    }

    return false;
}

export default validatePhoneNumber;

