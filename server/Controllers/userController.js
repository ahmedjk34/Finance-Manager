const mongoose = require("mongoose");
const userModel = require("../Modles/userModel");
exports.fetchUser = async function (req, res) {
  try {
    const user = await userModel.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
