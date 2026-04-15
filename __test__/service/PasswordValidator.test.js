const { isPasswordValid } = require('../../src/model/PasswordValidator');

describe('Password Validator', () => {
  test('deve rejeitar senha com menos de 8 caracteres', () => {
    expect(isPasswordValid('Ab1!')).toBe(false);
  });
});