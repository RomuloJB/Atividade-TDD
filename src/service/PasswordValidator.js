const { constantes } = require('../util/Constantes');
const { mensagens } = require('../util/Mensagens');

class PasswordValidator {
    static validar(senha) {
        this.validarTamanhoMinimo(senha);
        this.validarMaiuscula(senha);
        this.validarMinuscula(senha);

    return true;
    }

    static validarTamanhoMinimo(senha) {
        if (senha.length < constantes.SENHA_TAMANHO_MINIMO) {
            throw new Error(mensagens.SENHA_MUITO_CURTA);
        }
    }

    static validarMaiuscula(senha) {
        if (!/[A-Z]/.test(senha)) {
            throw new Error(mensagens.SENHA_SEM_MAIUSCULA);
        }
    }

    static validarMinuscula(senha) {
        if (!/[a-z]/.test(senha)) {
            throw new Error(mensagens.SENHA_SEM_MINUSCULA);
        }
    }
}

module.exports = { PasswordValidator };