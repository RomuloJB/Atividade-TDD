const { constantes } = require('../util/Constantes');
const { mensagens } = require('../util/Mensagens');

class PasswordValidator {
  static validar(senha) {
    const senhaMuitoCurta = senha.length < constantes.SENHA_TAMANHO_MINIMO;

    if (senhaMuitoCurta) {
      throw new Error(mensagens.SENHA_MUITO_CURTA);
    }

    if (!/[A-Z]/.test(senha)) {
      throw new Error(mensagens.SENHA_SEM_MAIUSCULA);
    }

    return true;
  }
}

module.exports = { PasswordValidator };