//Creación de modelo de datos para usuarios.

const mongoose = require("mongoose");

const userCollection = "user";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true, required: true },
  age: Number,
  //hashear:
  password: String,
  //referir al id del cart.
  cart: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const Users = mongoose.model(userCollection, userSchema);

module.exports = Users;