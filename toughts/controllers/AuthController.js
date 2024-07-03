const { where } = require("sequelize");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }

  static async loginPost(req, res) {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      req.flash("message", "Usuário não encontrado!");
      res.render("auth/login");

      return;
    }

    // Check if passwords match
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      req.flash("message", "Senha inválida!");
      res.render("auth/login");

      return;
    }

    try {
      // Initialize session
      req.session.userid = user.id;

      req.flash("message", "Autenticação realizada com sucesso!");

      req.session.save(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log(err);
    }
  }

  static register(req, res) {
    res.render("auth/register");
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    // Password match validation
    if (password != confirmpassword) {
      req.flash("message", "As senhas não conferem, tente novamente!");
      res.render("auth/register");

      return;
    }

    // Check if user exists
    const checkIfUserExists = await User.findOne({ where: { email: email } });

    if (checkIfUserExists) {
      req.flash("message", "E-mail já cadastrado!");
      res.render("auth/register");

      return;
    }

    // Create a password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = {
      name,
      email,
      password: hashedPassword,
    };

    try {
      const createdUser = await User.create(user);

      // Initialize session
      req.session.userid = createdUser.id;

      req.flash("message", "Usuário cadastrado com sucesso!");

      req.session.save(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log(err);
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
};
