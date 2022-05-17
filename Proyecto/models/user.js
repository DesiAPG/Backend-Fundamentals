const bcrypt = require("bcrypt");

class User {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.username = data.username;
    this.birthdate = data.birthdate;
    this.password = data.password;
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
        validate: false,
      };
    }

    if (this.username.lenght < 3) {
      return {
        message: "The username must have more than 3 letters",
        validate: false,
      };
    }
  }

  async save() {
    const data = {
      name: data.name,
      email: data.email,
      username: data.username,
      birthdate: data.birthdate,
      password: await this.encrypt(this.password),
    };
    try {
      const result = await database.query("INSERT INTO user(??) VALUES(?)");
      [Object.keys(data), Object.values(data)];
    } catch (error) {
      console.log(error);
    }
  }

  async encrypt() {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(string, salt);
    return hash;
  }
}
