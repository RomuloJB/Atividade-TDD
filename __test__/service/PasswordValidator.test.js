const { PasswordValidator } = require('../src/service/PasswordValidator');
const { mensagens } = require('../src/util/mensagens');

describe('PasswordValidator', () => {
    test('deve rejeitar senha com menos de 8 caracteres', () => {
        expect(() => PasswordValidator.validar('Ab1!'))
            .toThrow(mensagens.SENHA_MUITO_CURTA);
    });

    test('deve rejeitar senha sem letra maiúscula', () => {
        expect(() => PasswordValidator.validar('abc123!@'))
            .toThrow(mensagens.SENHA_SEM_MAIUSCULA);
    });

    test('deve rejeitar senha sem letra minúscula', () => {
        expect(() => PasswordValidator.validar('ABC123!@'))
            .toThrow(mensagens.SENHA_SEM_MINUSCULA);
    });

    test('deve rejeitar senha sem número', () => {
        expect(() => PasswordValidator.validar('Abcdef!@'))
            .toThrow(mensagens.SENHA_SEM_NUMERO);
    });

    test('deve rejeitar senha sem caractere especial', () => {
        expect(() => PasswordValidator.validar('Abcdef12'))
            .toThrow(mensagens.SENHA_SEM_CARACTERE_ESPECIAL);
    });
});