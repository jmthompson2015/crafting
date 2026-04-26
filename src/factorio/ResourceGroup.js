import * as R from "ramda";

import Resource from "../Resource.js";

const ResourceGroup = {
	ADVANCED_CIRCUIT: "Advanced Circuit",
	AUTOMATION_SCIENCE_PACK: "Automation Science Pack",
	CHEMICAL_SCIENCE_PACK: "Chemical Science Pack",
	COAL: "Coal",
	COPPER_ORE: "Copper Ore",
	COPPER_PLATE: "Copper Plate",
	ELECTRIC_FURNACE: "Electric Furnace",
	ENGINE_UNIT: "Engine Unit",
	FLYING_ROBOT_FRAME: "Flying Robot Frame",
	GRENADE: "Grenade",
	INSERTER: "Inserter",
	IRON_GEAR_WHEEL: "Iron Gear Wheel",
	IRON_ORE: "Iron Ore",
	IRON_PLATE: "Iron Plate",
	LOGISTIC_SCIENCE_PACK: "Logistic Science Pack",
	LOW_DENSITY_STRUCTURE: "Low Density Structure",
	MILITARY_SCIENCE_PACK: "Military Science Pack",
	MOLTEN_COPPER: "Molten Copper",
	MOLTEN_IRON: "Molten Iron",
	PETROLEUM_GAS: "Petroleum Gas",
	PIERCING_ROUNDS_MAGAZINE: "Piercing Rounds Magazine",
	PLASTIC_BAR: "Plastic Bar",
	PROCESSING_UNIT: "Processing Unit",
	PRODUCTION_SCIENCE_PACK: "Production Science Pack",
	PRODUCTIVITY_MODULE: "Productivity Module",
	RAIL: "Rail",
	STEEL_PLATE: "Steel Plate",
	SULFUR: "Sulfur",
	TRANSPORT_BELT: "Transport Belt",
	UTILITY_SCIENCE_PACK: "Utility Science Pack",
	WALL: "Wall",
};

const properties = {
	[ResourceGroup.ADVANCED_CIRCUIT]: new Resource({
		name: "Advanced Circuit",
		image: "https://wiki.factorio.com/images/thumb/Advanced_circuit.png/32px-Advanced_circuit.png",
	}),
	[ResourceGroup.AUTOMATION_SCIENCE_PACK]: new Resource({
		name: "Automation Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Automation_science_pack.png/32px-Automation_science_pack.png",
	}),
	[ResourceGroup.CHEMICAL_SCIENCE_PACK]: new Resource({
		name: "Chemical Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Chemical_science_pack.png/32px-Chemical_science_pack.png",
	}),
	[ResourceGroup.COAL]: new Resource({
		name: "Coal",
		image: "https://wiki.factorio.com/images/thumb/Coal.png/32px-Coal.png",
	}),
	[ResourceGroup.COPPER_ORE]: new Resource({
		name: "Copper Ore",
		image: "https://wiki.factorio.com/images/thumb/Copper_ore.png/32px-Copper_ore.png",
	}),
	[ResourceGroup.COPPER_PLATE]: new Resource({
		name: "Copper Plate",
		image: "https://wiki.factorio.com/images/thumb/Copper_plate.png/32px-Copper_plate.png",
	}),
	[ResourceGroup.ELECTRIC_FURNACE]: new Resource({
		name: "Electric Furnace",
		image: "https://wiki.factorio.com/images/thumb/Electric_furnace.png/32px-Electric_furnace.png",
	}),
	[ResourceGroup.ENGINE_UNIT]: new Resource({
		name: "Engine Unit",
		image: "https://wiki.factorio.com/images/thumb/Engine_unit.png/32px-Engine_unit.png",
	}),
	[ResourceGroup.FLYING_ROBOT_FRAME]: new Resource({
		name: "Flying Robot Frame",
		image: "https://wiki.factorio.com/images/thumb/Flying_robot_frame.png/32px-Flying_robot_frame.png",
	}),
	[ResourceGroup.GRENADE]: new Resource({
		name: "Grenade",
		image: "https://wiki.factorio.com/images/thumb/Grenade.png/32px-Grenade.png",
	}),
	[ResourceGroup.INSERTER]: new Resource({
		name: "Inserter",
		image: "https://wiki.factorio.com/images/thumb/Inserter.png/32px-Inserter.png",
	}),
	[ResourceGroup.IRON_GEAR_WHEEL]: new Resource({
		name: "Iron Gear Wheel",
		image: "https://wiki.factorio.com/images/thumb/Iron_gear_wheel.png/32px-Iron_gear_wheel.png",
	}),
	[ResourceGroup.IRON_ORE]: new Resource({
		name: "Iron Ore",
		image: "https://wiki.factorio.com/images/thumb/Iron_ore.png/32px-Iron_ore.png",
	}),
	[ResourceGroup.IRON_PLATE]: new Resource({
		name: "Iron Plate",
		image: "https://wiki.factorio.com/images/thumb/Iron_plate.png/32px-Iron_plate.png",
	}),
	[ResourceGroup.LOGISTIC_SCIENCE_PACK]: new Resource({
		name: "Logistic Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Logistic_science_pack.png/32px-Logistic_science_pack.png",
	}),
	[ResourceGroup.LOW_DENSITY_STRUCTURE]: new Resource({
		name: "Low Density Structure",
		image: "https://wiki.factorio.com/images/thumb/Low_density_structure.png/32px-Low_density_structure.png",
	}),
	[ResourceGroup.MILITARY_SCIENCE_PACK]: new Resource({
		name: "Military Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Military_science_pack.png/32px-Military_science_pack.png",
	}),
	[ResourceGroup.MOLTEN_COPPER]: new Resource({
		name: "Molten Copper",
		image: "https://wiki.factorio.com/images/thumb/Molten_copper.png/32px-Molten_copper.png",
	}),
	[ResourceGroup.MOLTEN_IRON]: new Resource({
		name: "Molten Iron",
		image: "https://wiki.factorio.com/images/thumb/Molten_iron.png/32px-Molten_iron.png",
	}),
	[ResourceGroup.PETROLEUM_GAS]: new Resource({
		name: "Petroleum Gas",
		image: "https://wiki.factorio.com/images/thumb/Petroleum_gas.png/32px-Petroleum_gas.png",
	}),
	[ResourceGroup.PIERCING_ROUNDS_MAGAZINE]: new Resource({
		name: "Piercing Rounds Magazine",
		image: "https://wiki.factorio.com/images/thumb/Piercing_rounds_magazine.png/32px-Piercing_rounds_magazine.png",
	}),
	[ResourceGroup.PLASTIC_BAR]: new Resource({
		name: "Plastic Bar",
		image: "https://wiki.factorio.com/images/thumb/Plastic_bar.png/32px-Plastic_bar.png",
	}),
	[ResourceGroup.PROCESSING_UNIT]: new Resource({
		name: "Processing Unit",
		image: "https://wiki.factorio.com/images/thumb/Processing_unit.png/32px-Processing_unit.png",
	}),
	[ResourceGroup.PRODUCTION_SCIENCE_PACK]: new Resource({
		name: "Production Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Production_science_pack.png/32px-Production_science_pack.png",
	}),
	[ResourceGroup.PRODUCTIVITY_MODULE]: new Resource({
		name: "Productivity Module",
		image: "https://wiki.factorio.com/images/thumb/Productivity_module.png/32px-Productivity_module.png",
	}),
	[ResourceGroup.RAIL]: new Resource({
		name: "Rail",
		image: "https://wiki.factorio.com/images/thumb/Straight_rail.png/32px-Straight_rail.png",
	}),
	[ResourceGroup.STEEL_PLATE]: new Resource({
		name: "Steel Plate",
		image: "https://wiki.factorio.com/images/thumb/Steel_plate.png/32px-Steel_plate.png",
	}),
	[ResourceGroup.SULFUR]: new Resource({
		name: "Sulfur",
		image: "https://wiki.factorio.com/images/thumb/Sulfur.png/32px-Sulfur.png",
	}),
	[ResourceGroup.TRANSPORT_BELT]: new Resource({
		name: "Transport Belt",
		image: "https://wiki.factorio.com/images/thumb/Transport_belt.png/32px-Transport_belt.png",
	}),
	[ResourceGroup.UTILITY_SCIENCE_PACK]: new Resource({
		name: "Utility Science Pack",
		image: "https://wiki.factorio.com/images/thumb/Utility_science_pack.png/32px-Utility_science_pack.png",
	}),
	[ResourceGroup.WALL]: new Resource({
		name: "Wall",
		image: "https://wiki.factorio.com/images/thumb/Wall.png/32px-Wall.png",
	}),
};

ResourceGroup.get = (key) => {
	const answer = properties[key];

	if (R.isNil(answer)) {
		console.warn(`Missing Resource for key = :${key}:`);
	}

	return answer;
};

ResourceGroup.keys = () => Object.keys(properties);

ResourceGroup.values = () => Object.values(properties);

Object.freeze(ResourceGroup);

export default ResourceGroup;
