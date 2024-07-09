import validator from "validator";

class User {
  #email;
  #hash;

  constructor(config) {
    this.email = config.email;
    this.hash = config.hash;
  }

  get email() {
    return this.#email;
  }

  get hash() {
    return this.#hash;
  }

  set email(value) {
    if (!validator.isEmail(value)) {
      throw new Error('Email obligatoire');
    }
    this.#email = value;
  }

  set hash(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Mot de passe obligatoire');
    }
    this.#hash = value;
  }
}

export default User;
