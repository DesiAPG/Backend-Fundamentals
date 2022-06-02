class AuthController {
  static login(req, res) {
    console.log(req.body);
    return res.redirect("/");
  }

  static getLoginForm(req, res) {
    return res.render("login", {
      username: "Tzuzul",
      lista: ["María", "Miguel", "Emilio"],
      id: 123,
      // hiddenNavbar:true
    });
  }
}

module.exports = AuthController;
