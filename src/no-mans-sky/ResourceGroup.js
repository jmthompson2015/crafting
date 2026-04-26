import * as R from "ramda";
import Resource from "../Resource.js";

const ResourceGroup = {
	AMMONIA: "Ammonia",
	ARONIUM: "Aronium",
	CACTUS_FLESH: "Cactus Flesh",
	CARBON: "Carbon",
	CIRCUIT_BOARD: "Circuit Board",
	CONDENSED_CARBON: "Condensed Carbon",
	CRYO_PUMP: "Cryo-Pump",
	CRYOGENIC_CHAMBER: "Cryogenic Chamber",
	DIOXITE: "Dioxite",
	DIRTY_BRONZE: "Dirty Bronze",
	ENRICHED_CARBON: "Enriched Carbon",
	FAECIUM: "Faecium",
	FROST_CRYSTAL: "Frost Crystal",
	FUSION_IGNITOR: "Fusion Ignitor",
	GAMMA_ROOT: "Gamma Root",
	GEODESITE: "Geodesite",
	GLASS: "Glass",
	GRANTINE: "Grantine",
	HEAT_CAPACITOR: "Heat Capacitor",
	HEROX: "Herox",
	HOT_ICE: "Hot Ice",
	IONISED_COBALT: "Ionised Cobalt",
	IRIDESITE: "Iridesite",
	LEMMIUM: "Lemmium",
	LIVING_GLASS: "Living Glass",
	LUBRICANT: "Lubricant",
	MAGNO_GOLD: "Magno-Gold",
	NITROGEN: "Nitrogen",
	NITROGEN_SALT: "Nitrogen Salt",
	OXYGEN: "Oxygen",
	PARAFFINIUM: "Paraffinium",
	PHOSPHORUS: "Phosphorus",
	POLY_FIBRE: "Poly Fibre",
	PORTABLE_REACTOR: "Portable Reactor",
	PURE_FERRITE: "Pure Ferrite",
	PYRITE: "Pyrite",
	QUANTUM_PROCESSOR: "Quantum Processor",
	RADON: "Radon",
	SEMICONDUCTOR: "Semiconductor",
	SOLANIUM: "Solanium",
	STAR_BULB: "Star Bulb",
	STASIS_DEVICE: "Stasis Device",
	SULPHURINE: "Sulphurine",
	SUPERCONDUCTOR: "Superconductor",
	THERMIC_CONDENSATE: "Thermic Condensate",
	URANIUM: "Uranium",
};

const properties = {
	[ResourceGroup.AMMONIA]: new Resource({
		name: "Ammonia",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/6/67/SUBSTANCE.BIOME.TOXIC.png",
	}),
	[ResourceGroup.ARONIUM]: new Resource({
		name: "Aronium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/2/23/Product.metallic.1.png",
	}),
	[ResourceGroup.CACTUS_FLESH]: new Resource({
		name: "Cactus Flesh",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7f/SUBSTANCE.PLANT.DUSTY.png",
	}),
	[ResourceGroup.CARBON]: new Resource({
		name: "Carbon",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/5/5b/SUBSTANCE.FUEL.1.png",
	}),
	[ResourceGroup.CIRCUIT_BOARD]: new Resource({
		name: "Circuit Board",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/41/FARMPROD.9.png",
	}),
	[ResourceGroup.CONDENSED_CARBON]: new Resource({
		name: "Condensed Carbon",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a5/SUBSTANCE.FUEL.2.png",
	}),
	[ResourceGroup.CRYO_PUMP]: new Resource({
		name: "Cryo-Pump",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/1/17/COMPOUND.6.png",
	}),
	[ResourceGroup.CRYOGENIC_CHAMBER]: new Resource({
		name: "Cryogenic Chamber",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/4e/PRODUCT.CRYOCHAMBER.png",
	}),
	[ResourceGroup.DIOXITE]: new Resource({
		name: "Dioxite",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/df/SUBSTANCE.BIOME.COLD.png",
	}),
	[ResourceGroup.DIRTY_BRONZE]: new Resource({
		name: "Dirty Bronze",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/1/19/Product.metallic.2.png",
	}),
	[ResourceGroup.ENRICHED_CARBON]: new Resource({
		name: "Enriched Carbon",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/41/REACTION.2.png",
	}),
	[ResourceGroup.FAECIUM]: new Resource({
		name: "Faecium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/c/cf/SUBSTANCE.PLANT.POOP.png",
	}),
	[ResourceGroup.FROST_CRYSTAL]: new Resource({
		name: "Frost Crystal",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7d/SUBSTANCE.PLANT.SNOW.png",
	}),
	[ResourceGroup.FUSION_IGNITOR]: new Resource({
		name: "Fusion Ignitor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/3/3a/ULTRAPROD.1.png",
	}),
	[ResourceGroup.GAMMA_ROOT]: new Resource({
		name: "Gamma Root",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7e/SUBSTANCE.PLANT.RADIO.png",
	}),
	[ResourceGroup.GEODESITE]: new Resource({
		name: "Geodesite",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/8/81/PRODUCT.METALLIC.7.png",
	}),
	[ResourceGroup.GLASS]: new Resource({
		name: "Glass",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/8/8e/FARMPROD.3.png",
	}),
	[ResourceGroup.GRANTINE]: new Resource({
		name: "Grantine",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a0/Product.metallic.6.png",
	}),
	[ResourceGroup.HEAT_CAPACITOR]: new Resource({
		name: "Heat Capacitor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7f/FARMPROD.4.png",
	}),
	[ResourceGroup.HEROX]: new Resource({
		name: "Herox",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/74/Product.metallic.3.png",
	}),
	[ResourceGroup.HOT_ICE]: new Resource({
		name: "Hot Ice",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/6/61/COMPOUND.3.png",
	}),
	[ResourceGroup.IONISED_COBALT]: new Resource({
		name: "Ionised Cobalt",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/e/e3/SUBSTANCE.CAVE.2.png",
	}),
	[ResourceGroup.IRIDESITE]: new Resource({
		name: "Iridesite",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/40/PRODUCT.IRIDISITE.png",
	}),
	[ResourceGroup.LEMMIUM]: new Resource({
		name: "Lemmium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/9/93/Product.metallic.4.png",
	}),
	[ResourceGroup.LIVING_GLASS]: new Resource({
		name: "Living Glass",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/1/1e/FARMPROD.8.png",
	}),
	[ResourceGroup.LUBRICANT]: new Resource({
		name: "Lubricant",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/1/18/FARMPROD.2.png",
	}),
	[ResourceGroup.MAGNO_GOLD]: new Resource({
		name: "Magno-Gold",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/75/Product.metallic.5.png",
	}),
	[ResourceGroup.NITROGEN]: new Resource({
		name: "Nitrogen",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/77/GAS.1.png",
	}),
	[ResourceGroup.NITROGEN_SALT]: new Resource({
		name: "Nitrogen Salt",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/8/8f/Reaction.3.png",
	}),
	[ResourceGroup.OXYGEN]: new Resource({
		name: "Oxygen",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/e/ec/SUBSTANCE.AIR.1.png",
	}),
	[ResourceGroup.PARAFFINIUM]: new Resource({
		name: "Paraffinium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7f/SUBSTANCE.BIOME.LUSH.png",
	}),
	[ResourceGroup.PHOSPHORUS]: new Resource({
		name: "Phosphorus",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7c/SUBSTANCE.BIOME.HOT.png",
	}),
	[ResourceGroup.POLY_FIBRE]: new Resource({
		name: "Poly Fibre",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/42/FARMPROD.5.png",
	}),
	[ResourceGroup.PORTABLE_REACTOR]: new Resource({
		name: "Portable Reactor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/9/9f/MEGAPROD.1.png",
	}),
	[ResourceGroup.PURE_FERRITE]: new Resource({
		name: "Pure Ferrite",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7b/SUBSTANCE.LAND.2.png",
	}),
	[ResourceGroup.PYRITE]: new Resource({
		name: "Pyrite",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/7f/SUBSTANCE.BIOME.DUSTY.png",
	}),
	[ResourceGroup.QUANTUM_PROCESSOR]: new Resource({
		name: "Quantum Processor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/e/ef/MEGAPROD.2.png",
	}),
	[ResourceGroup.RADON]: new Resource({
		name: "Radon",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/0/0d/GAS.2.png",
	}),
	[ResourceGroup.SEMICONDUCTOR]: new Resource({
		name: "Semiconductor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/c/c3/COMPOUND.2.png",
	}),
	[ResourceGroup.SOLANIUM]: new Resource({
		name: "Solanium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/f/fa/SUBSTANCE.PLANT.HOT.png",
	}),
	[ResourceGroup.STAR_BULB]: new Resource({
		name: "Star Bulb",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/72/SUBSTANCE.PLANT.LUSH.png",
	}),
	[ResourceGroup.STASIS_DEVICE]: new Resource({
		name: "Stasis Device",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/c/c2/ULTRAPROD.2.png",
	}),
	[ResourceGroup.SULPHURINE]: new Resource({
		name: "Sulphurine",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/77/GAS.3.png",
	}),
	[ResourceGroup.SUPERCONDUCTOR]: new Resource({
		name: "Superconductor",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/9/98/COMPOUND.5.png",
	}),
	[ResourceGroup.THERMIC_CONDENSATE]: new Resource({
		name: "Thermic Condensate",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/d4/REACTION.1.png",
	}),
	[ResourceGroup.URANIUM]: new Resource({
		name: "Uranium",
		image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/7/73/SUBSTANCE.BIOME.RADIO.png",
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
