function isPasswordValid(password) {
  return password.lenght >= 8;
}

module.exports = { isPasswordValid };