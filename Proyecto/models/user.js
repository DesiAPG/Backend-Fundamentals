const bcrypt = require("bcrypt");
const res = require("express/lib/response");

class User {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.username = data.username;
    this.birthdate = data.birthdate;
    this.password = data.password;
    this.data = data;
  }

  validate() {
    if (
      !(
        this.name &&
        this.email &&
        this.username &&
        this.birthdate &&
        this.password
      )
    ) {
      return {
        message: "Debes ingresar todos los campos",
        validated: false,
      };
    }

    if (this.username.lenght < 3) {
      return {
        message: "The username must have more than 3 letters",
        validated: false,
      };
    }
    return {
      validated: true,
    };
  }

  async save() {
    const data = {
      name: this.name,
      email: this.email,
      password: await this.encrypt(this.password),
      username: this.username,
      birthday: this.birthday,
    };
    try {
      const result = await database.query("INSERT INTO users(??) VALUES(?)", [
        Object.keys(data),
        Object.values(data),
      ]);

      console.log(result);

      delete data.password;
      data.id = result.insertId;

      return {
        user: data,
        success: true,
        message: "Usuario registrado correctamente",
      };
    } catch (error) {
      return error;
    }
  }

  async login() {
    const result = await database.query("SELECT * FROM users WHERE email = ?", [
      this.email,
    ]);
    const user = result[0];
    if (user) {
      if (await this.compare(this.password, user.password)) {
        delete user.password;
        return {
          success: true,
          user,
          message: "Usuario correcto",
        };
      } else {
        return {
          success: false,
          message: "Credenciales incorrectas",
        };
      }
    }

    return {
      success: false,
      message: "Usuario no registrado",
    };
  }

  async encrypt(string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(string, salt);
    return hash;
  }
}

module.exports = User;
