import IV from "./InputValidator.js";

class Fabricator {
  #name;
  #key;
  #image;
  #clientProps;

  constructor({ name, key, image, clientProps = {} }) {
    IV.validateIsString("name", name);

    this.#name = name;
    this.#key = key;
    this.#image = image;
    this.#clientProps = clientProps;
  }

  get clientProps() {
    return this.#clientProps;
  }

  get image() {
    return this.#image;
  }

  get key() {
    return this.#key;
  }

  get name() {
    return this.#name;
  }

  toString() {
    return this.#name;
  }
}

Object.freeze(Fabricator);

export default Fabricator;
