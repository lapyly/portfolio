//Utilización de JWT para autorizar usuarios.

const jwt = require("jsonwebtoken");
const { JWTSECRET } = require("../configs/app.config");

//generación de token jwt
const generateJwt = (tokenInfo) => {
  return jwt.sign(tokenInfo, JWTSECRET);
};

//authorización via token jwt
const authJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader)
    return res.json(401).json({ status: "error", error: "No autorizado" });

  const token = authHeader.split(" ")[1];
  console.log("token:", token);

  jwt.verify(token, JWTSECRET, (error, credentials) => {
    console.log("error:", error);
    // if (error) return;
    // res.status(401).json({ status: "error", error: "No autorizado!" });
    req.tokenInfo = credentials.tokenInfo;

    next();
  });
};

module.exports = { generateJwt, authJwt };