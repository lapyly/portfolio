const { Router } = require("express");
const router = Router();

const Users = require("../models/users.model");


//PATRON DE DISEÑO DTO
const NewUserDto = require("./DTO/new-user.dto");
const NewUserResponseDto = require("./DTO/new-user-response.dto");


router.post("/", async (req, res) => {
    try {
      const newUserInfo = await new NewUserDto(req.body);
      const newUser = await Users.create(newUserInfo)
      
      const user = await new NewUserResponseDto(newUser[0]);
      console.log(user);
      res.json({ status: "success", payload: user });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  });
  
  module.exports = router;