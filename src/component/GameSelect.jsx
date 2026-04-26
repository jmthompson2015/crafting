import Game from "../Game.js";
import "./GameSelect.css"

function GameSelect({ onChange, selected = "", prompt = "Game" }) {
  const handleChange = (event) => {
    console.log(`GameSelect.handleChange() event.target.value = ${event.target.value}`);
    onChange(event);
  };

  return (
    <div className="containerStyle">
      <label>{prompt}: </label>
      <select value={selected} onChange={handleChange}>
        {Game.values().map((game) => (
          <option key={game.key} value={game.key}>
            {game.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Object.freeze(GameSelect);

export default GameSelect;
