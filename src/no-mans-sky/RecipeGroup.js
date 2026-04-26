import * as R from "ramda";

import Ingredient from "../Ingredient.js";
import Recipe from "../Recipe.js";

import FabricatorGroup from "./FabricatorGroup.js";
import ResourceGroup from "./ResourceGroup.js";

const player = [FabricatorGroup.get(FabricatorGroup.PLAYER)];

const create1 = (name, inputKeys, outputKeys) => {
	const mapFunction1 = (key) => ResourceGroup.get(key);
	const inputResources = R.map(mapFunction1, inputKeys);
	const outputResources = R.map(mapFunction1, outputKeys);

	const mapFunction2 = (resource) => new Ingredient({ resource });
	const inputs = R.map(mapFunction2, inputResources);
	const outputs = R.map(mapFunction2, outputResources);

	return new Recipe({ name, inputs, fabricators: player, outputs });
};

const createN = (name, inputKeyAmounts, outputKeyAmounts) => {
	const mapFunction1 = (keyAmount) => {
		const resource = ResourceGroup.get(keyAmount[0]);
		const amount = keyAmount[1];
		return new Ingredient({ resource, amount });
	};

	const inputs = R.map(mapFunction1, inputKeyAmounts);
	const outputs = R.map(mapFunction1, outputKeyAmounts);

	return new Recipe({ name, inputs, fabricators: player, outputs });
};

const RecipeGroup = {
	ARONIUM: "Aronium",
	CARBON: "Carbon",
	CIRCUIT_BOARD: "Circuit Board",
	CONDENSED_CARBON: "Condensed Carbon",
	CRYO_PUMP: "Cryo-Pump",
	CRYOGENIC_CHAMBER: "Cryogenic Chamber",
	DIRTY_BRONZE: "Dirty Bronze",
	ENRICHED_CARBON: "Enriched Carbon",
	FUSION_IGNITOR: "Fusion Ignitor",
	GEODESITE: "Geodesite",
	GLASS: "Glass",
	GRANTINE: "Grantine",
	HEAT_CAPACITOR: "Heat Capacitor",
	HEROX: "Herox",
	HOT_ICE: "Hot Ice",
	IRIDESITE: "Iridesite",
	LEMMIUM: "Lemmium",
	LIVING_GLASS: "Living Glass",
	LUBRICANT: "Lubricant",
	MAGNO_GOLD: "Magno-Gold",
	POLY_FIBRE: "Poly Fibre",
	QUANTUM_PROCESSOR: "Quantum Processor",
	NITROGEN_SALT: "Nitrogen Salt",
	STASIS_DEVICE: "Stasis Device",
	SUPERCONDUCTOR: "Superconductor",
	THERMIC_CONDENSATE: "Thermic Condensate",
};

const properties = {
	[RecipeGroup.ARONIUM]: createN(
		"Aronium",
		[
			[ResourceGroup.IONISED_COBALT, 50],
			[ResourceGroup.PARAFFINIUM, 50],
		],
		[[ResourceGroup.ARONIUM, 1]],
	),
	[RecipeGroup.CARBON]: create1(
		"Carbon",
		[ResourceGroup.OXYGEN],
		[ResourceGroup.CARBON],
	),
	[RecipeGroup.CIRCUIT_BOARD]: create1(
		"Circuit Board",
		[ResourceGroup.HEAT_CAPACITOR, ResourceGroup.POLY_FIBRE],
		[ResourceGroup.CIRCUIT_BOARD],
	),
	[RecipeGroup.CONDENSED_CARBON]: createN(
		"Condensed Carbon",
		[[ResourceGroup.CARBON, 2]],
		[[ResourceGroup.CONDENSED_CARBON, 1]],
	),
	[RecipeGroup.CRYO_PUMP]: create1(
		"Cryo-Pump",
		[ResourceGroup.HOT_ICE, ResourceGroup.THERMIC_CONDENSATE],
		[ResourceGroup.CRYO_PUMP],
	),
	[RecipeGroup.CRYOGENIC_CHAMBER]: create1(
		"Cryogenic Chamber",
		[ResourceGroup.CRYO_PUMP, ResourceGroup.LIVING_GLASS],
		[ResourceGroup.CRYOGENIC_CHAMBER],
	),
	[RecipeGroup.DIRTY_BRONZE]: createN(
		"Dirty Bronze",
		[
			[ResourceGroup.PURE_FERRITE, 100],
			[ResourceGroup.PYRITE, 50],
		],
		[[ResourceGroup.DIRTY_BRONZE, 1]],
	),
	[RecipeGroup.ENRICHED_CARBON]: createN(
		"Enriched Carbon",
		[
			[ResourceGroup.CONDENSED_CARBON, 50],
			[ResourceGroup.RADON, 250],
		],
		[[ResourceGroup.ENRICHED_CARBON, 1]],
	),
	[RecipeGroup.FUSION_IGNITOR]: create1(
		"Fusion Ignitor",
		[
			ResourceGroup.GEODESITE,
			ResourceGroup.PORTABLE_REACTOR,
			ResourceGroup.QUANTUM_PROCESSOR,
		],
		[ResourceGroup.FUSION_IGNITOR],
	),
	[RecipeGroup.GEODESITE]: create1(
		"Geodesite",
		[
			ResourceGroup.DIRTY_BRONZE,
			ResourceGroup.HEROX,
			ResourceGroup.LEMMIUM,
		],
		[ResourceGroup.GEODESITE],
	),
	[RecipeGroup.GLASS]: createN(
		"Glass",
		[[ResourceGroup.FROST_CRYSTAL, 40]],
		[[ResourceGroup.get(ResourceGroup.GLASS), 1]],
	),
	[RecipeGroup.GRANTINE]: createN(
		"Grantine",
		[
			[ResourceGroup.DIOXITE, 50],
			[ResourceGroup.IONISED_COBALT, 50],
		],
		[[ResourceGroup.GRANTINE, 1]],
	),
	[RecipeGroup.HEAT_CAPACITOR]: createN(
		"Heat Capacitor",
		[
			[ResourceGroup.FROST_CRYSTAL, 100],
			[ResourceGroup.SOLANIUM, 200],
		],
		[[ResourceGroup.HEAT_CAPACITOR, 1]],
	),
	[RecipeGroup.HEROX]: createN(
		"Herox",
		[
			[ResourceGroup.AMMONIA, 50],
			[ResourceGroup.IONISED_COBALT, 50],
		],
		[[ResourceGroup.HEROX, 1]],
	),
	[RecipeGroup.HOT_ICE]: create1(
		"Hot Ice",
		[ResourceGroup.ENRICHED_CARBON, ResourceGroup.NITROGEN_SALT],
		[ResourceGroup.HOT_ICE],
	),
	[RecipeGroup.IRIDESITE]: create1(
		"Iridesite",
		[
			ResourceGroup.ARONIUM,
			ResourceGroup.GRANTINE,
			ResourceGroup.MAGNO_GOLD,
		],
		[ResourceGroup.IRIDESITE],
	),
	[RecipeGroup.LEMMIUM]: createN(
		"Lemmium",
		[
			[ResourceGroup.PURE_FERRITE, 100],
			[ResourceGroup.URANIUM, 50],
		],
		[[ResourceGroup.LEMMIUM, 1]],
	),
	[RecipeGroup.LIVING_GLASS]: createN(
		"Living Glass",
		[
			[ResourceGroup.GLASS, 5],
			[ResourceGroup.LUBRICANT, 1],
		],
		[[ResourceGroup.LIVING_GLASS, 1]],
	),
	[RecipeGroup.LUBRICANT]: createN(
		"Lubricant",
		[
			[ResourceGroup.FAECIUM, 50],
			[ResourceGroup.GAMMA_ROOT, 400],
		],
		[[ResourceGroup.LUBRICANT, 1]],
	),
	[RecipeGroup.MAGNO_GOLD]: createN(
		"Magno-Gold",
		[
			[ResourceGroup.IONISED_COBALT, 50],
			[ResourceGroup.PHOSPHORUS, 50],
		],
		[[ResourceGroup.MAGNO_GOLD, 1]],
	),
	[RecipeGroup.NITROGEN_SALT]: createN(
		"Nitrogen Salt",
		[
			[ResourceGroup.CONDENSED_CARBON, 50],
			[ResourceGroup.NITROGEN, 250],
		],
		[[ResourceGroup.NITROGEN_SALT, 1]],
	),
	[RecipeGroup.QUANTUM_PROCESSOR]: create1(
		"Quantum Processor",
		[ResourceGroup.CIRCUIT_BOARD, ResourceGroup.SUPERCONDUCTOR],
		[ResourceGroup.QUANTUM_PROCESSOR],
	),
	[RecipeGroup.POLY_FIBRE]: createN(
		"Poly Fibre",
		[
			[ResourceGroup.CACTUS_FLESH, 100],
			[ResourceGroup.STAR_BULB, 200],
		],
		[[ResourceGroup.POLY_FIBRE, 1]],
	),
	[RecipeGroup.STASIS_DEVICE]: create1(
		"Stasis Device",
		[
			ResourceGroup.CRYOGENIC_CHAMBER,
			ResourceGroup.IRIDESITE,
			ResourceGroup.QUANTUM_PROCESSOR,
		],
		[ResourceGroup.STASIS_DEVICE],
	),
	[RecipeGroup.SUPERCONDUCTOR]: create1(
		"Superconductor",
		[ResourceGroup.ENRICHED_CARBON, ResourceGroup.SEMICONDUCTOR],
		[ResourceGroup.SUPERCONDUCTOR],
	),
	[RecipeGroup.THERMIC_CONDENSATE]: createN(
		"Thermic Condensate",
		[
			[ResourceGroup.CONDENSED_CARBON, 50],
			[ResourceGroup.SULPHURINE, 250],
		],
		[[ResourceGroup.THERMIC_CONDENSATE, 1]],
	),
};

RecipeGroup.get = (key) => {
	const answer = properties[key];

	if (R.isNil(answer)) {
		console.warn(`Missing Recipe for key = :${key}:`);
	}

	return answer;
};

RecipeGroup.keys = () => Object.keys(properties);

RecipeGroup.values = () => Object.values(properties);

RecipeGroup.valuesByInput = (resource) => {
	let answer = [];

	if (R.isNotNil(resource)) {
		const filterFunction = (recipe) => recipe.isInput(resource);
		answer = R.filter(filterFunction, RecipeGroup.values());
	}

	return answer;
};

RecipeGroup.valuesByOutput = (resource) => {
	let answer = [];

	if (R.isNotNil(resource)) {
		const filterFunction = (recipe) => recipe.isOutput(resource);
		answer = R.filter(filterFunction, RecipeGroup.values());
	}

	return answer;
};

Object.freeze(RecipeGroup);

export default RecipeGroup;
