//Configuración de variables .env

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT, //Puerto localhost
  URLDB: process.env.URLDB, //Url MongoDB
  JWTSECRET: process.env.JWTSECRET, //Secreto firma JWT
};