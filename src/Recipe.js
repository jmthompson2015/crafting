import * as R from "ramda";

import IV from "./InputValidator.js";

class Recipe {
  #inputs;
  #fabricators;
  #outputs;
  #key;
  #name;
  #clientProps;

  constructor({ inputs, fabricators, outputs, key, name, clientProps = {} }) {
    IV.validateIsArray("inputs", inputs);
    IV.validateIsArray("outputs", outputs);

    this.#inputs = inputs;
    this.#fabricators = fabricators;
    this.#outputs = outputs;
    this.#key = key;
    this.#name = name;
    this.#clientProps = clientProps;

    if (R.isNil(this.#key)) {
      this.#key = name;
    }
  }

  get clientProps() {
    return this.#clientProps;
  }

  get fabricators() {
    return this.#fabricators;
  }

  get inputs() {
    return this.#inputs;
  }

  get key() {
    return this.#key;
  }

  get name() {
    return this.#name;
  }

  get outputs() {
    return this.#outputs;
  }

  isInput(resource) {
    IV.validateNotNil("resource", resource);
    const mapFunction = (ingredient) => ingredient.resource.key;
    const resourceKeys = R.map(mapFunction, this.#inputs);

    return R.includes(resource.key, resourceKeys);
  }

  isOutput(resource) {
    IV.validateNotNil("resource", resource);
    const mapFunction = (ingredient) => ingredient.resource.key;
    const resourceKeys = R.map(mapFunction, this.#outputs);

    return R.includes(resource.key, resourceKeys);
  }

  toString(showName) {
    const prefix = showName && this.#name ? `${this.#name}: ` : "";

    const inputFunction = (accum, ingredient) =>
      accum + ingredient.toString() + " + ";
    const string = R.reduce(inputFunction, "", this.#inputs);
    const inputStr = string.substring(0, string.length - " + ".length);

    const outputFunction = (accum, ingredient) => accum + ingredient.toString();
    const outputStr = R.reduce(outputFunction, "", this.#outputs);

    if (this.#fabricators) {
      const fabFunction = (accum, fabricator) =>
        accum + fabricator.toString() + "|";
      const string2 = R.reduce(fabFunction, "", this.#fabricators);
      const fabStr =
        "[" + string2.substring(0, string2.length - "|".length) + "]";

      return `${prefix}${outputStr} \u2190 ${fabStr} \u2190 ${inputStr}`;
    } else {
      return `${prefix}${outputStr} \u2190 ${inputStr}`;
    }
  }
}

Object.freeze(Recipe);

export default Recipe;
