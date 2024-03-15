class NewUserResponseDto {
    constructor(userInfo) {
      this.username = userInfo.username;
      this.email = userInfo.email;
      this.created_At = userInfo.created_At;
    }
  }
  
  module.exports = NewUserResponseDto;