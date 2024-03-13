const { Router } = require("express");
const router = Router();

const passportCall = require("../utils/passport-call.util");
const authorization = require("./middleware/middleware.auth");

const Users = require("../../model/mongo/user.mongo");

//PATRON DE DISEÑO DTO
const NewUserDto = require("./DTO/new-user.dto");
const NewUserResponseDto = require("./DTO/new-user-response.dto");


router.post("/", async (req, res) => {
    try {
      const newUserInfo = await new NewUserDto(req.body);
      const newUser = Users.create(newUserInfo);
      
      const user = new NewUserResponseDto(newUser[0]);
  
      res.json({ status: "success", payload: user });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  });
  
  //Se solicita autenticación passport-jwt para acceder a los usuarios.
  //El login genera el token en una cookie-> esa cookie tiene el token que autoriza a acceder a todos los users.
  router.get(
    "/",
    passportCall("jwt"),
    authorization("admin"),
    async (req, res) => {
      try {
        const users = await Users.get()
        res.json({ status: "success", payload: users });
      } catch (error) {
        res.status(500).json({ status: "error", message: error });
      }
    }
  );
  
  module.exports = router;