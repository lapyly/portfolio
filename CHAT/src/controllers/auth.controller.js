//Controlador de autorización.

const { Router } = require("express");
const { passwordIsValidated } = require("../utils/bcrypt.util");
const { generateJwt } = require("../utils/jwt.util");
const router = Router();

const Users = require("../../model/mongo/user.mongo");

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ status: "error", error: "Bad request" });
      const profile = Users.findUser(email);
      if (!profile)
        return res.status(400).json({ status: "error", error: "BadRequest" });
  
      // confirmación por hasheo
      if (!passwordIsValidated(password, user))
        return res.status(400).json({ status: "error", error: "BadRequest" });
      //generación de token
      const tokenInfo = {
        id: user.id,
        role: user.role,
      };
      const token = generateJwt(tokenInfo);
      console.log(token);
  
      //almacenamiento de token en cookie
      res
        .cookie("authToken", token, {
          maxAge: 600000,
          httpOnly: true,
        })
        .json({ message: "success", payload: "Great" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error });
    }
  });
  
  module.exports = router;