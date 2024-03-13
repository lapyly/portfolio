//Encriptamiento de contraseña cuando el usuario se registra.

const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
// const user = Users.password;
const passwordIsValidated = (password, user) => {
  return bcrypt.compareSync(password, user.password);
};

module.exports = { hashPassword, passwordIsValidated };