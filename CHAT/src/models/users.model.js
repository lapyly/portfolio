//Creación de modelo de datos para usuarios.

const mongoose = require("mongoose");

const userCollection = "user";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const Users = mongoose.model(userCollection, userSchema);

module.exports = Users;