const Tought = require("../models/Tought.js");
const User = require("../models/User.js");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }
};
