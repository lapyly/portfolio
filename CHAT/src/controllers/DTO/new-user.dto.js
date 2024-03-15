const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("../../utils/bcrypt.util");

class NewUserDto {
  constructor(userInfo) {
    this.id = uuidv4();
    this.username = userInfo.username;
    this.email = userInfo.email;
    this.password = hashPassword(userInfo.password);
    this.created_At = Date.now();
  }
}

module.exports = NewUserDto;