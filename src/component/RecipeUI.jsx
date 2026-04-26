import Dagre from "dagre";
import * as R from "ramda";
import { useState, useCallback } from "react";
import {
	ReactFlow,
	ReactFlowProvider,
	MarkerType,
	// Panel,
	useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import IngredientUI from "./IngredientUI.jsx";

import "./RecipeUI.css";

const nodeTypes = { item: IngredientUI };

const ingredientToNode = (ingredient) => {
	const resource = ingredient.resource;

	return {
		id: resource.key,
		type: "item",
		data: {
			ingredient,
			label: resource.name,
			image: resource.image,
			quantity: ingredient.amount,
		},
	};
}

const ingredientsToEdges = (inputs, outputs) => {
	const edges = [];

	for (const input of inputs) {
		for (const output of outputs) {
			edges.push({
				id: `e${edges.length + 1}`,
				source: output.resource.key,
				target: input.resource.key,
			});
		}
	}

	return edges;
};

const recipeToNodesEdges = (recipe) => {
	const { inputs, outputs } = recipe;

	const nodes0 = R.map(ingredientToNode, outputs);
	const nodes1 = R.map(ingredientToNode, inputs);
	const initialNodes = R.concat(nodes0, nodes1);

	const initialEdges = ingredientsToEdges(inputs, outputs);

	return { initialNodes, initialEdges };
};

const getLayoutedElements = (nodes, edges, options) => {
	const g = new Dagre.graphlib.Graph({
		directed: true,
		multigraph: false,
		compound: false,
	});
	g.setGraph({});
	g.setDefaultEdgeLabel(() => ({}));

	edges.forEach((edge) => g.setEdge(edge.source, edge.target));
	nodes.forEach((node) =>
		g.setNode(node.id, {
			...node,
			width: node.measured?.width ?? 120,
			height: node.measured?.height ?? 120,
		}),
	);

	Dagre.layout(g);

	return {
		nodes: nodes.map((node) => {
			const position = g.node(node.id);
			// We are shifting the dagre node position (anchor=center center) to the top left
			// so it matches the React Flow node anchor point (top left).
			const x = position.x - (node.measured?.width ?? 0) / 2;
			const y = position.y - (node.measured?.height ?? 0) / 2;

			return { ...node, position: { x, y } };
		}),
		edges,
	};
};

const defaultEdgeOptions = {
	style: { strokeColor: "black", strokeWidth: 2 },
	type: "step",
	markerStart: {
		color: "black",
		width: "16",
		height: "16",
		type: MarkerType.ArrowClosed,
	},
};

const RecipeUI = ({ recipe, onNodeClick }) => {
	// console.log(`RecipeUI() recipe = ${recipe} typeof ${typeof recipe}`);

	if (R.isNil(recipe)) {
		return (<div className="no-recipe">No recipe selected</div>)
	}
	else {
		const { fitView } = useReactFlow();
		const { initialNodes, initialEdges } = recipeToNodesEdges(recipe);
		const layouted = getLayoutedElements(initialNodes, initialEdges, {});

		return (
			<>
				<div className="title">Recipe: {recipe.name}</div>
				<div className="graph">
					<ReactFlow
						nodes={layouted.nodes}
						nodeTypes={nodeTypes}
						edges={layouted.edges}
						defaultEdgeOptions={defaultEdgeOptions}
						onNodeClick={onNodeClick}
						fitView
					/>
				</div>
			</>
		);
	}
};

Object.freeze(RecipeUI);

export default function ({ recipe, onNodeClick }) {
	return (
		<ReactFlowProvider>
			<RecipeUI recipe={recipe} onNodeClick={onNodeClick} />
		</ReactFlowProvider>
	);
}
