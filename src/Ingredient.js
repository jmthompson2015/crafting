import * as R from "ramda";

import IV from "./InputValidator.js";

class Ingredient {
  #resource;
  #amount;
  #clientProps;

  constructor({ resource, amount = 1, clientProps = {} }) {
    IV.validateNotNil("resource", resource);

    this.#resource = resource;
    this.#amount = amount;
    this.#clientProps = clientProps;
  }

  get amount() {
    return this.#amount;
  }

  get clientProps() {
    return this.#clientProps;
  }

  get resource() {
    return this.#resource;
  }

  toString() {
    return R.isNil(this.#resource) || R.isNil(this.#amount)
      ? null
      : `${this.#resource.name} x${this.#amount}`;
  }
}

Object.freeze(Ingredient);

export default Ingredient;
