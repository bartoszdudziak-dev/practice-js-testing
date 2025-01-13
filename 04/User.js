export default class User {
  static #minPasswordLength = 8;
  static #emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor({ email, password }) {
    if (!User.isEmailValid(email)) {
      throw new Error("Invalid email address");
    }

    if (!User.isPasswordValid(password)) {
      throw new Error(
        `Password must contains at least ${User.#minPasswordLength} characters`
      );
    }

    this.email = email;
    this.password = password;
  }

  static isEmailValid(email) {
    const reg = new RegExp(User.#emailPattern);
    return reg.test(email);
  }

  static isPasswordValid(password) {
    return password.length >= User.#minPasswordLength;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    const domain = "devmentor.pl";
    return this.email.endsWith(domain);
  }
}
