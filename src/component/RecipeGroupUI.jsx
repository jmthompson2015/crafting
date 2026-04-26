import * as R from "ramda";

import RecipeSelect from "./RecipeSelect.jsx";
import RecipeUI from "./RecipeUI.jsx";

import IV from "../InputValidator.js";

import "./RecipeGroupUI.css"

const RecipeGroupUI = ({ recipeValues, selected, onChange, onNodeClick }) => {
    IV.validateIsArray("recipeValues", recipeValues);
    IV.validateNotNil("onChange", onChange);
    IV.validateNotNil("onNodeClick", onNodeClick);

    if (recipeValues.length === 0) {
        return <div className="recipe-empty">No recipes available</div>;
    } else if (recipeValues.length === 1) {
        return (
            <>
                <RecipeUI recipe={selected} onNodeClick={onNodeClick} />
            </>
        );
    } else {
        return (
            <>
                <RecipeSelect
                    recipeValues={recipeValues}
                    onChange={onChange}
                    selected={selected ? selected.key : ""}
                />
                <RecipeUI recipe={selected} onNodeClick={onNodeClick} />
            </>
        );
    }
}

Object.freeze(RecipeGroupUI);

export default RecipeGroupUI;
