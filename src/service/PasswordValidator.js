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

    static validarNumero(senha) {
        if (!/[0-9]/.test(senha)) {
            throw new Error(mensagens.SENHA_SEM_NUMERO);
        }
    }

    static validarCaractereEspecial(senha) {
        if (!/[!@#$%^&*]/.test(senha)) {
            throw new Error(mensagens.SENHA_SEM_CARACTERE_ESPECIAL);
        }
    }

    static validarEspacos(senha) {
        if (/\s/.test(senha)) {
            throw new Error(mensagens.SENHA_COM_ESPACO);
        }
    }
}

module.exports = { PasswordValidator };