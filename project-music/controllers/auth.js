const User = require("../models/user");
const bcrypt = require("bcrypt");

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    const { success, user } = await User.getByEmail(email);
    if (success && user) {
      try {
        if (await bcrypt.compare(password, user.password)) {
          return res.redirect("/");
        }
      } catch (error) {
        console.log(error);
      }
    }

    return res.render("login", {
      error: "Incorrect credentials",
      user: {
        email,
        password,
      },
    });
  }

  static getLoginForm(req, res) {
    return res.render("login", {
      username: "Desire",
      lista: ["duvan", "camilo"],
      id: 123,
    });
  }
}

module.exports = AuthController;
