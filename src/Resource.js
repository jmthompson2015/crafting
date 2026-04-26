import * as R from "ramda";

import IV from "./InputValidator.js";

class Resource {
  #name;
  #key;
  #image;
  #value;
  #clientProps;

  constructor({ name, key, image, value = 0, clientProps = {} }) {
    IV.validateIsString("name", name);

    this.#name = name;
    this.#key = key;
    this.#image = image;
    this.#value = value;
    this.#clientProps = clientProps;

    if (R.isNil(this.#key)) {
      this.#key = name;
    }
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

  get value() {
    return this.#value;
  }

  toString() {
    return this.#name;
  }
}

Object.freeze(Resource);

export default Resource;
