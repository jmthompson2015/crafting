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
	ADVANCED_CIRCUIT: "Advanced Circuit",
	ADVANCED_OIL_PROCESSING: "Advanced Oil Processing",
	AMMONIA_ROCKET_FUEL: "Ammonia Rocket Fuel",
	AUTOMATION_SCIENCE_PACK: "Automation Science Pack",
	BASIC_OIL_PROCESSING: "Basic Oil Processing",
	CARBON_FIBER: "Carbon Fiber",
	CASTING_COPPER: "Casting Copper",
	CASTING_IRON: "Casting Iron",
	CASTING_IRON_GEAR_WHEEL: "Casting Iron Gear Wheel",
	CHEMICAL_SCIENCE_PACK: "Chemical Science Pack",
	// COAL_LIQUEFACTION: "Coal Liquefaction",
	COPPER_PLATE: "Copper Plate",
	ELECTRONIC_CIRCUIT: "Electronic Circuit",
	HEAVY_OIL_CRACKING: "Heavy Oil Cracking",
	IRON_GEAR_WHEEL: "Iron Gear Wheel",
	IRON_PLATE: "Iron Plate",
	LIGHT_OIL_CRACKING: "Light Oil Cracking",
	LITHIUM_PLATE: "Lithium Plate",
	LOGISTIC_SCIENCE_PACK: "Logistic Science Pack",
	LOW_DENSITY_STRUCTURE: "Low Density Structure",
	MILITARY_SCIENCE_PACK: "Military Science Pack",
	PLASTIC_BAR: "Plastic Bar",
	PROCESSING_UNIT: "Processing Unit",
	PRODUCTION_SCIENCE_PACK: "Production Science Pack",
	QUANTUM_PROCESSOR: "Quantum Processor",
	ROCKET_FUEL: "Rocket Fuel",
	ROCKET_FUEL_FROM_JELLY: "Rocket Fuel from Jelly",
	ROCKET_PART: "Rocket Part",
	STEEL_PLATE: "Steel Plate",
	SULFUR: "Sulfur",
	SULFURIC_ACID: "Sulfuric Acid",
	SUPERCONDUCTOR: "Superconductor",
	TUNGSTEN_CARBIDE: "Tungsten Carbide",
	UTILITY_SCIENCE_PACK: "Utility Science Pack",
};

const properties = {
	[RecipeGroup.ADVANCED_CIRCUIT]: createN("Advanced Circuit",
		[[ResourceGroup.COPPER_CABLE, 4], [ResourceGroup.ELECTRONIC_CIRCUIT, 2], [ResourceGroup.PLASTIC_BAR, 2]],
		assemblers,
		[[ResourceGroup.ADVANCED_CIRCUIT, 1]]),
	[RecipeGroup.ADVANCED_OIL_PROCESSING]: createN("Advanced Oil Processing",
		[[ResourceGroup.CRUDE_OIL, 100], [ResourceGroup.WATER, 50]],
		[FabricatorGroup.get(FabricatorGroup.OIL_REFINERY)],
		[[ResourceGroup.HEAVY_OIL, 25], [ResourceGroup.LIGHT_OIL, 45], [ResourceGroup.PETROLEUM_GAS, 55]]),
	[RecipeGroup.AMMONIA_ROCKET_FUEL]: createN("Ammonia Rocket Fuel",
		[[ResourceGroup.AMMONIA, 500], [ResourceGroup.SOLID_FUEL, 10], [ResourceGroup.WATER, 50]],
		[FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT), FabricatorGroup.get(FabricatorGroup.CRYOGENIC_PLANT)],
		[[ResourceGroup.ROCKET_FUEL, 1]]),
	[RecipeGroup.AUTOMATION_SCIENCE_PACK]: create1("Automation Science Pack",
		[ResourceGroup.COPPER_PLATE, ResourceGroup.IRON_GEAR_WHEEL],
		assemblers,
		[ResourceGroup.AUTOMATION_SCIENCE_PACK]),
	[RecipeGroup.BASIC_OIL_PROCESSING]: createN("Basic Oil Processing",
		[[ResourceGroup.CRUDE_OIL, 100]],
		[FabricatorGroup.get(FabricatorGroup.OIL_REFINERY)],
		[[ResourceGroup.PETROLEUM_GAS, 45]]),
	[RecipeGroup.CARBON_FIBER]: createN("Carbon Fiber",
		[[ResourceGroup.CARBON, 1], [ResourceGroup.YUMAKO_MASH, 10]],
		[FabricatorGroup.get(FabricatorGroup.BIOCHAMBER)],
		[[ResourceGroup.CARBON_FIBER, 1]]),
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
	// [RecipeGroup.COAL_LIQUEFACTION]: createN("Coal Liquefaction",
	// 	[[ResourceGroup.COAL, 10], [ResourceGroup.HEAVY_OIL, 25], [ResourceGroup.STEAM, 50]],
	// 	[FabricatorGroup.get(FabricatorGroup.OIL_REFINERY)],
	// 	[[ResourceGroup.HEAVY_OIL, 90], [ResourceGroup.LIGHT_OIL, 20], [ResourceGroup.PETROLEUM_GAS, 10]]),
	[RecipeGroup.COPPER_PLATE]: create1("Copper Plate", [ResourceGroup.COPPER_ORE], furnaces, [ResourceGroup.COPPER_PLATE]),
	[RecipeGroup.ELECTRONIC_CIRCUIT]: createN("Electronic Circuit",
		[[ResourceGroup.COPPER_CABLE, 3], [ResourceGroup.IRON_PLATE, 1]],
		[FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_1),
		FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_2),
		FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_3),
		FabricatorGroup.get(FabricatorGroup.ELECTROMAGNETIC_PLANT),
		FabricatorGroup.get(FabricatorGroup.ENGINEER)],
		[[ResourceGroup.ELECTRONIC_CIRCUIT, 1]]),
	[RecipeGroup.IRON_GEAR_WHEEL]: createN("Iron Gear Wheel",
		[[ResourceGroup.IRON_PLATE, 2]],
		assemblers,
		[[ResourceGroup.IRON_GEAR_WHEEL, 1]]),
	[RecipeGroup.IRON_PLATE]: create1("Iron Plate", [ResourceGroup.IRON_ORE], furnaces, [ResourceGroup.IRON_PLATE]),
	[RecipeGroup.HEAVY_OIL_CRACKING]: createN("Heavy Oil Cracking",
		[[ResourceGroup.HEAVY_OIL, 40], [ResourceGroup.WATER, 30]],
		[FabricatorGroup.get(FabricatorGroup.BIOCHAMBER), FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT)],
		[[ResourceGroup.LIGHT_OIL, 30]]),
	[RecipeGroup.LIGHT_OIL_CRACKING]: createN("Light Oil Cracking",
		[[ResourceGroup.LIGHT_OIL, 30], [ResourceGroup.WATER, 30]],
		[FabricatorGroup.get(FabricatorGroup.BIOCHAMBER), FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT)],
		[[ResourceGroup.PETROLEUM_GAS, 20]]),
	[RecipeGroup.LITHIUM_PLATE]: create1("Lithium Plate", [ResourceGroup.LITHIUM], furnaces, [ResourceGroup.LITHIUM_PLATE]),
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
	[RecipeGroup.PROCESSING_UNIT]: createN("Processing Unit",
		[[ResourceGroup.ADVANCED_CIRCUIT, 2], [ResourceGroup.ELECTRONIC_CIRCUIT, 20], [ResourceGroup.SULFURIC_ACID, 5]],
		[FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_2), FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_3)],
		[[ResourceGroup.PROCESSING_UNIT, 1]]),
	[RecipeGroup.PRODUCTION_SCIENCE_PACK]: createN("Production Science Pack",
		[[ResourceGroup.ELECTRIC_FURNACE, 1], [ResourceGroup.PRODUCTIVITY_MODULE, 1], [ResourceGroup.RAIL, 30]],
		assemblers,
		[[ResourceGroup.PRODUCTION_SCIENCE_PACK, 3]]),
	[RecipeGroup.QUANTUM_PROCESSOR]: createN("Quantum Processor",
		[[ResourceGroup.CARBON_FIBER, 1],
		[ResourceGroup.FLUOROKETONE_COLD, 10],
		[ResourceGroup.LITHIUM_PLATE, 2],
		[ResourceGroup.PROCESSING_UNIT, 1],
		[ResourceGroup.SUPERCONDUCTOR, 1],
		[ResourceGroup.TUNGSTEN_CARBIDE, 1]],
		[FabricatorGroup.get(FabricatorGroup.ELECTROMAGNETIC_PLANT)],
		[[ResourceGroup.FLUOROKETONE_HOT, 5], [ResourceGroup.QUANTUM_PROCESSOR, 1]]),
	[RecipeGroup.ROCKET_FUEL]: createN("Rocket Fuel",
		[[ResourceGroup.LIGHT_OIL, 10], [ResourceGroup.SOLID_FUEL, 10]],
		[FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_2), FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_3)],
		[[ResourceGroup.ROCKET_FUEL, 1]]),
	[RecipeGroup.ROCKET_FUEL_FROM_JELLY]: createN("Rocket Fuel from Jelly",
		[[ResourceGroup.BIOFLUX, 2], [ResourceGroup.JELLY, 30], [ResourceGroup.WATER, 30]],
		[FabricatorGroup.get(FabricatorGroup.BIOCHAMBER)],
		[[ResourceGroup.ROCKET_FUEL, 1]]),
	[RecipeGroup.ROCKET_PART]: create1("Rocket Part",
		[ResourceGroup.LOW_DENSITY_STRUCTURE, ResourceGroup.PROCESSING_UNIT, ResourceGroup.ROCKET_FUEL],
		[FabricatorGroup.get(FabricatorGroup.ROCKET_SILO)],
		[ResourceGroup.ROCKET_PART]),
	[RecipeGroup.STEEL_PLATE]: createN("Steel Plate",
		[[ResourceGroup.IRON_PLATE, 5]],
		furnaces,
		[[ResourceGroup.STEEL_PLATE, 1]]),
	[RecipeGroup.SULFUR]: createN("Sulfur",
		[[ResourceGroup.PETROLEUM_GAS, 30], [ResourceGroup.WATER, 30]],
		[FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT), FabricatorGroup.get(FabricatorGroup.CRYOGENIC_PLANT)],
		[[ResourceGroup.SULFUR, 2]]),
	[RecipeGroup.SULFURIC_ACID]: createN("Sulfuric Acid",
		[[ResourceGroup.IRON_PLATE, 1], [ResourceGroup.SULFUR, 5], [ResourceGroup.WATER, 100]],
		[FabricatorGroup.get(FabricatorGroup.CHEMICAL_PLANT)],
		[[ResourceGroup.SULFURIC_ACID, 50]]),
	[RecipeGroup.SUPERCONDUCTOR]: createN("Superconductor",
		[[ResourceGroup.COPPER_PLATE, 1], [ResourceGroup.HOLMIUM_PLATE, 1], [ResourceGroup.LIGHT_OIL, 5], [ResourceGroup.PLASTIC_BAR, 1]],
		[FabricatorGroup.get(FabricatorGroup.ELECTROMAGNETIC_PLANT)],
		[[ResourceGroup.SUPERCONDUCTOR, 2]]),
	[RecipeGroup.TUNGSTEN_CARBIDE]: createN("Tungsten Carbide",
		[[ResourceGroup.CARBON, 1], [ResourceGroup.SULFURIC_ACID, 10], [ResourceGroup.TUNGSTEN_ORE, 2]],
		[FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_2), FabricatorGroup.get(FabricatorGroup.ASSEMBLING_MACHINE_3)],
		[[ResourceGroup.TUNGSTEN_CARBIDE, 1]]),
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
