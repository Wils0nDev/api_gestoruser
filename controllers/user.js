const { response } = require("express");
const bcryptjs = require("bcrypt");
const User = require("../models/user");



const userGet = async (req, res = response) => {

  
  const users = await User.findAll();
  const data = users
  res.json({
    data,
    msj: "usuario desde el controlador",
  });
};



module.exports = { userGet};
