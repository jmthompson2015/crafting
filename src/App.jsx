import * as R from "ramda";
import { useState } from 'react'

import Game from "./Game.js";
import RecipeGroup from './no-mans-sky/RecipeGroup'

import GameSelect from "./component/GameSelect.jsx";
import IngredientUI from './component/IngredientUI'
import RecipeGroupUI from "./component/RecipeGroupUI.jsx";
import RecipeSelect from './component/RecipeSelect.jsx'
import ResourceSelect from "./component/ResourceSelect.jsx";

import './App.css'

function App() {
  const determineRecipes = (game, input, output) => {
    const recipeGroup = game.recipeGroup;
    let answer;

    if (R.isNil(input) && R.isNil(output)) {
      answer = recipeGroup.values();
    } else {
      const inputRecipes = recipeGroup.valuesByInput(input);
      const outputRecipes = recipeGroup.valuesByOutput(output);

      if (R.isEmpty(inputRecipes) && R.isEmpty(outputRecipes)) {
        answer = [];
      } else if (R.isEmpty(outputRecipes)) {
        answer = inputRecipes;
      } else if (R.isEmpty(inputRecipes)) {
        answer = outputRecipes;
      } else {
        const inputKeys = R.map(R.prop("key"), inputRecipes);
        const outputKeys = R.map(R.prop("key"), outputRecipes);
        const keys = R.intersection(inputKeys, outputKeys);
        answer = R.map((key) => recipeGroup.get(key), keys);
      }
    }

    return answer;
  };

  function onGameChange(event) {
    const key = event.target.value;
    const game = Game.get(event.target.value);

    const recipes = determineRecipes(game, game.initialSelectedInput, game.initialSelectedOutput);
    const recipe = R.head(recipes);

    setSelectedGame(game);
    setSelectedInput(game.initialSelectedInput);
    setSelectedOutput(game.initialSelectedOutput);
    setRecipeValues(recipes);
    setSelectedRecipe(recipe);
  }

  const onInputChange = (event) => {
    const key = event.target.value;
    console.log(`onInputChange() key = :${key}: `);

    if (key === "any") {
      const recipes = selectedGame.recipeGroup.values();

      setSelectedInput(undefined);
      setRecipeValues(recipes);
      setSelectedRecipe(R.head(recipes));
    } else {
      const resource = selectedGame.resourceGroup.get(key);
      const recipes = determineRecipes(selectedGame, resource, selectedOutput);

      setSelectedInput(resource);
      setRecipeValues(recipes);
      setSelectedRecipe(R.head(recipes));
    }
  };

  const onInputClick = (event) => {
    const key = event.target.value;
    console.log(`onInputClick() key = :${key}: typeof ${typeof key} `);

    const recipes = selectedGame.recipeGroup.values();

    setSelectedInput(undefined);
    setRecipeValues(recipes);
    setSelectedRecipe(R.head(recipes));
  }

  const onNodeClick = (event, node) => {
    let recipes = [];
    const resource = node.data.ingredient.resource;

    if (selectedRecipe.isInput(resource)) {
      setSelectedInput(null);
      setSelectedOutput(resource);
      recipes = determineRecipes(selectedGame, null, resource);
    } else if (selectedRecipe.isOutput(resource)) {
      setSelectedInput(resource);
      setSelectedOutput(null);
      recipes = determineRecipes(selectedGame, resource, null);
    }

    setRecipeValues(recipes);
    setSelectedRecipe(R.head(recipes));
  };

  const onOutputChange = (event) => {
    const key = event.target.value;
    console.log(`onOutputChange() key = :${key}: typeof ${typeof key} `);

    if (key === "any") {
      const recipes = selectedGame.recipeGroup.values();

      setSelectedOutput(undefined);
      setRecipeValues(recipes);
      setSelectedRecipe(R.head(recipes));
    } else {
      const resource = selectedGame.resourceGroup.get(key);
      const recipes = determineRecipes(selectedGame, selectedInput, resource);

      setSelectedOutput(resource);
      setRecipeValues(recipes);
      setSelectedRecipe(R.head(recipes));
    }
  };

  const onOutputClick = (event) => {
    const key = event.target.value;
    console.log(`onOutputClick() key = :${key}: typeof ${typeof key} `);

    const recipes = selectedGame.recipeGroup.values();

    setSelectedOutput(undefined);
    setRecipeValues(recipes);
    setSelectedRecipe(R.head(recipes));
  }

  const onRecipeChange = (event) => {
    const key = event.target.value;
    console.log(`onRecipeChange() key = :${key}: `);

    const recipe = selectedGame.recipeGroup.get(key);
    setSelectedRecipe(recipe);
  }

  const initialGame = Game.get(Game.NO_MANS_SKY);
  const [selectedGame, setSelectedGame] = useState(initialGame);
  const [selectedInput, setSelectedInput] = useState(initialGame.initialSelectedInput);
  const [selectedOutput, setSelectedOutput] = useState(initialGame.initialSelectedOutput);

  const initialRecipes = determineRecipes(selectedGame, selectedInput, selectedOutput);
  const [recipeValues, setRecipeValues] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(R.head(recipeValues));

  const resourceValues = selectedGame.resourceGroup.values();

  return (
    <>
      <h1>Crafting</h1>
      <div className="filter">
        <div className="containerStyle">
          <GameSelect onChange={onGameChange} selected={selectedGame.key} />
        </div>
        <div className="containerStyle">
          <ResourceSelect
            resourceValues={resourceValues}
            onChange={onInputChange}
            onClick={onInputClick}
            selected={selectedInput ? selectedInput.key : ""}
            prompt="Input"
          />
          <ResourceSelect
            resourceValues={resourceValues}
            onChange={onOutputChange}
            onClick={onOutputClick}
            selected={selectedOutput ? selectedOutput.key : ""}
            prompt="Output"
          />
        </div >
      </div >
      <RecipeGroupUI
        recipeValues={recipeValues}
        selected={selectedRecipe}
        onChange={onRecipeChange}
        onNodeClick={onNodeClick} />
    </>
  )
}

export default App
