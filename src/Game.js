import * as R from "ramda";

import FactorioRecipeGroup from "./factorio/RecipeGroup.js";
import FactorioResourceGroup from "./factorio/ResourceGroup.js";

import NMSRecipeGroup from "./no-mans-sky/RecipeGroup.js";
import NMSResourceGroup from "./no-mans-sky/ResourceGroup.js";

const Game = {
	FACTORIO: "factorio",
	NO_MANS_SKY: "no mans sky",
};

const properties = {
	[Game.FACTORIO]: {
		key: "factorio",
		name: "Factorio",
		recipeGroup: FactorioRecipeGroup,
		resourceGroup: FactorioResourceGroup,
	},
	[Game.NO_MANS_SKY]: {
		key: "no mans sky",
		name: "No Man's Sky",
		recipeGroup: NMSRecipeGroup,
		resourceGroup: NMSResourceGroup,
		initialSelectedOutput: NMSResourceGroup.get(NMSResourceGroup.STASIS_DEVICE),
	},
};

Game.get = (key) => {
	const answer = properties[key];

	if (R.isNil(answer)) {
		console.warn(`Missing Game for key = :${key}`);
	}

	return answer;
};

Game.keys = () => Object.keys(properties);

Game.values = () => Object.values(properties);

Object.freeze(Game);

export default Game;
