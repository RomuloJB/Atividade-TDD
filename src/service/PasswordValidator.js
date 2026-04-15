function isPasswordValid(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);

    return hasMinLength && hasUppercase;
}

module.exports = { isPasswordValid };