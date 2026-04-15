function isPasswordValid(password) {
    const hasMinLenght = password.lenght >= 8;
    return hasMinLenght;
}

module.exports = { isPasswordValid };