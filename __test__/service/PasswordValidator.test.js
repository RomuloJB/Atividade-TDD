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
});