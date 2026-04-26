import * as R from "ramda";

import Ingredient from "../Ingredient.js";
import Recipe from "../Recipe.js";

import FabricatorGroup from "./FabricatorGroup.js";
import ResourceGroup from "./ResourceGroup.js";

const assemblers = [
	FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_1),
	FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_2),
	FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_3),
	FabricatorGroup.get(FabricatorGroup.ENGINEER),
];

const furnaces = [
	FabricatorGroup.get(FabricatorGroup.STONE_FURNACE),
	FabricatorGroup.get(FabricatorGroup.STEEL_FURNACE),
	FabricatorGroup.get(FabricatorGroup.ELECTRIC_FURNACE),
];

const create1 = (name, inputKeys, fabricators, outputKeys) => {
	const mapFunction1 = (key) => ResourceGroup.get(key);
	const inputResources = R.map(mapFunction1, inputKeys);
	const outputResources = R.map(mapFunction1, outputKeys);

	const mapFunction2 = (resource) => new Ingredient({ resource });
	const inputs = R.map(mapFunction2, inputResources);
	const outputs = R.map(mapFunction2, outputResources);

	return new Recipe({ name, inputs, fabricators, outputs });
};

const createN = (name, inputKeyAmounts, fabricators, outputKeyAmounts) => {
	const mapFunction1 = (keyAmount) => {
		const resource = ResourceGroup.get(keyAmount[0]);
		const amount = keyAmount[1];
		return new Ingredient({ resource, amount });
	};

	const inputs = R.map(mapFunction1, inputKeyAmounts);
	const outputs = R.map(mapFunction1, outputKeyAmounts);

	return new Recipe({ name, inputs, fabricators, outputs });
};

const RecipeGroup = {
	AUTOMATION_SCIENCE_PACK: "Automation Science Pack",
	CASTING_COPPER: "Casting Copper",
	CASTING_IRON: "Casting Iron",
	CASTING_IRON_GEAR_WHEEL: "Casting Iron Gear Wheel",
	CHEMICAL_SCIENCE_PACK: "Chemical Science Pack",
	COPPER_PLATE: "Copper Plate",
	IRON_GEAR_WHEEL: "Iron Gear Wheel",
	IRON_PLATE: "Iron Plate",
	LOGISTIC_SCIENCE_PACK: "Logistic Science Pack",
	LOW_DENSITY_STRUCTURE: "Low Density Structure",
	MILITARY_SCIENCE_PACK: "Military Science Pack",
	PLASTIC_BAR: "Plastic Bar",
	PRODUCTION_SCIENCE_PACK: "Production Science Pack",
	STEEL_PLATE: "Steel Plate",
	UTILITY_SCIENCE_PACK: "Utility Science Pack",
};

const properties = {
	[RecipeGroup.AUTOMATION_SCIENCE_PACK]: create1("Automation Science Pack",
		[ResourceGroup.COPPER_PLATE, ResourceGroup.IRON_GEAR_WHEEL],
		assemblers,
		[ResourceGroup.AUTOMATION_SCIENCE_PACK]),
	[RecipeGroup.CASTING_COPPER]: createN("Casting Copper",
		[[ResourceGroup.MOLTEN_COPPER, 20]],
		[FabricatorGroup.get(FabricatorGroup.FOUNDRY)],
		[[ResourceGroup.COPPER_PLATE, 2]]),
	[RecipeGroup.CASTING_IRON]: createN("Casting Iron",
		[[ResourceGroup.MOLTEN_IRON, 20]],
		[FabricatorGroup.get(FabricatorGroup.FOUNDRY)],
		[[ResourceGroup.IRON_PLATE, 2]]),
	[RecipeGroup.CASTING_IRON_GEAR_WHEEL]: createN("Casting Iron Gear Wheel",
		[[ResourceGroup.MOLTEN_IRON, 10]],
		[FabricatorGroup.get(FabricatorGroup.FOUNDRY)],
		[[ResourceGroup.IRON_GEAR_WHEEL, 1]]),
	[RecipeGroup.CHEMICAL_SCIENCE_PACK]: createN("Chemical Science Pack",
		[[ResourceGroup.ADVANCED_CIRCUIT, 3], [ResourceGroup.ENGINE_UNIT, 2], [ResourceGroup.SULFUR, 1]],
		assemblers,
		[[ResourceGroup.CHEMICAL_SCIENCE_PACK, 2]]),
	[RecipeGroup.COPPER_PLATE]: create1("Copper Plate", [ResourceGroup.COPPER_ORE], furnaces, [ResourceGroup.COPPER_PLATE]),
	[RecipeGroup.IRON_GEAR_WHEEL]: createN("Iron Gear Wheel",
		[[ResourceGroup.IRON_PLATE, 2]],
		assemblers,
		[[ResourceGroup.IRON_GEAR_WHEEL, 1]]),
	[RecipeGroup.IRON_PLATE]: create1("Iron Plate", [ResourceGroup.IRON_ORE], furnaces, [ResourceGroup.IRON_PLATE]),
	[RecipeGroup.LOGISTIC_SCIENCE_PACK]: create1("Logistic Science Pack",
		[ResourceGroup.INSERTER, ResourceGroup.TRANSPORT_BELT],
		assemblers,
		[ResourceGroup.LOGISTIC_SCIENCE_PACK]),
	[RecipeGroup.LOW_DENSITY_STRUCTURE]: createN("Low Density Structure",
		[[ResourceGroup.COPPER_PLATE, 20], [ResourceGroup.PLASTIC_BAR, 5], [ResourceGroup.STEEL_PLATE, 2]],
		assemblers,
		[[ResourceGroup.LOW_DENSITY_STRUCTURE, 1]]),
	[RecipeGroup.MILITARY_SCIENCE_PACK]: createN("Military Science Pack",
		[[ResourceGroup.GRENADE, 1], [ResourceGroup.PIERCING_ROUNDS_MAGAZINE, 1], [ResourceGroup.WALL, 2]],
		assemblers,
		[[ResourceGroup.MILITARY_SCIENCE_PACK, 2]]),
	[RecipeGroup.PLASTIC_BAR]: createN("Plastic Bar",
		[[ResourceGroup.COAL, 1], [ResourceGroup.PETROLEUM_GAS, 20]],
		[FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT)],
		[[ResourceGroup.PLASTIC_BAR, 2]]),
	[RecipeGroup.PRODUCTION_SCIENCE_PACK]: createN("Production Science Pack",
		[[ResourceGroup.ELECTRIC_FURNACE, 1], [ResourceGroup.PRODUCTIVITY_MODULE, 1], [ResourceGroup.RAIL, 30]],
		assemblers,
		[[ResourceGroup.PRODUCTION_SCIENCE_PACK, 3]]),
	[RecipeGroup.STEEL_PLATE]: createN("Steel Plate",
		[[ResourceGroup.IRON_PLATE, 5]],
		furnaces,
		[[ResourceGroup.STEEL_PLATE, 1]]),
	[RecipeGroup.UTILITY_SCIENCE_PACK]: createN("Utility Science Pack",
		[[ResourceGroup.FLYING_ROBOT_FRAME, 1], [ResourceGroup.LOW_DENSITY_STRUCTURE, 3], [ResourceGroup.PROCESSING_UNIT, 2]],
		assemblers,
		[[ResourceGroup.UTILITY_SCIENCE_PACK, 3]]),
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
