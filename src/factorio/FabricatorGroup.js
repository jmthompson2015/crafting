import * as R from "ramda";

import Fabricator from "../Fabricator.js";

const FabricatorGroup = {
	ASSEMBLING_MACHINE_1: "Assembling Machine 1",
	ASSEMBLING_MACHINE_2: "Assembling Machine 2",
	ASSEMBLING_MACHINE_3: "Assembling Machine 3",
	CHEMICAL_PLANT: "Chemical Plant",
	ELECTRIC_FURNACE: "Electric Furnace",
	ENGINEER: "Engineer",
	FOUNDRY: "Foundry",
	STEEL_FURNACE: "Steel Furnace",
	STONE_FURNACE: "Stone Furnace",
};

const properties = {
	[FabricatorGroup.ASSEMBLING_MACHINE_1]: new Fabricator({
		name: "Assembling Machine 1",
		image: "https://wiki.factorio.com/images/thumb/Assembling_machine_1.png/32px-Assembling_machine_1.png",
	}),
	[FabricatorGroup.ASSEMBLING_MACHINE_2]: new Fabricator({
		name: "Assembling Machine 2",
		image: "https://wiki.factorio.com/images/thumb/Assembling_machine_2.png/32px-Assembling_machine_2.png",
	}),
	[FabricatorGroup.ASSEMBLING_MACHINE_3]: new Fabricator({
		name: "Assembling Machine 3",
		image: "https://wiki.factorio.com/images/thumb/Assembling_machine_3.png/32px-Assembling_machine_3.png",
	}),
	[FabricatorGroup.CHEMICAL_PLANT]: new Fabricator({
		name: "Chemical Plant",
		image: "https://wiki.factorio.com/images/thumb/Chemical_plant.png/32px-Chemical_plant.png",
	}),
	[FabricatorGroup.ELECTRIC_FURNACE]: new Fabricator({
		name: "Electric Furnace",
		image: "https://wiki.factorio.com/images/thumb/Electric_furnace.png/32px-Electric_furnace.png",
	}),
	[FabricatorGroup.ENGINEER]: new Fabricator({
		name: "Engineer",
		image: "https://wiki.factorio.com/images/thumb/Player.png/32px-Player.png",
	}),
	[FabricatorGroup.FOUNDRY]: new Fabricator({
		name: "Foundry",
		image: "https://wiki.factorio.com/images/thumb/Foundry.png/32px-Foundry.png",
	}),
	[FabricatorGroup.STEEL_FURNACE]: new Fabricator({
		name: "Steel Furnace",
		image: "https://wiki.factorio.com/images/thumb/Steel_furnace.png/32px-Steel_furnace.png",
	}),
	[FabricatorGroup.STONE_FURNACE]: new Fabricator({
		name: "Stone Furnace",
		image: "https://wiki.factorio.com/images/thumb/Stone_furnace.png/32px-Stone_furnace.png",
	}),
};

FabricatorGroup.get = (key) => {
	const answer = properties[key];

	if (R.isNil(answer)) {
		console.warn(`Missing Fabricator for key = :${key}:`);
	}

	return answer;
};

FabricatorGroup.keys = () => Object.keys(properties);

FabricatorGroup.values = () => Object.values(properties);

Object.freeze(FabricatorGroup);

export default FabricatorGroup;
