import IV from "../InputValidator.js";

import "./RecipeSelect.css"

function RecipeSelect({
  recipeValues,
  onChange,
  selected = "",
  prompt = "Recipe",
}) {
  IV.validateIsArray("recipeValues", recipeValues);
  IV.validateNotEmpty("recipeValues", recipeValues);
  IV.validateNotNil("onChange", onChange);

  return (
    <div className="containerStyle">
      <label>{prompt}: </label>
      <select value={selected} onChange={onChange}>
        {recipeValues.map((recipe) => (
          <option key={recipe.key} value={recipe.key}>
            {recipe.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Object.freeze(RecipeSelect);

export default RecipeSelect;
