import * as R from "ramda";

import Fabricator from "../Fabricator.js";

const FabricatorGroup = {
	PLAYER: "Player",
};

const properties = {
	[FabricatorGroup.PLAYER]: new Fabricator({
		name: "Player",
		image: "https://www.xainesworld.com/wp-content/uploads/2020/02/HEROIC.png",
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
