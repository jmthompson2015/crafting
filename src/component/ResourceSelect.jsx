import "./ResourceSelect.css"

import IV from "../InputValidator.js";

function ResourceSelect({
  resourceValues,
  onChange,
  onClick,
  selected = "any",
  prompt = "Resource",
}) {
  IV.validateIsArray("resourceValues", resourceValues);
  IV.validateNotEmpty("resourceValues", resourceValues);
  IV.validateNotNil("onChange", onChange);
  IV.validateNotNil("onClick", onClick);

  return (
    <div key={prompt} className="containerStyle">
      <label>{prompt}: </label>
      <select value={selected} onChange={onChange}>
        <option key="any" value="any">Any resource</option>
        {resourceValues.map((resource) => (
          <option key={resource.key} value={resource.key}>
            {resource.name}
          </option>
        ))}
      </select>
      <button onClick={onClick}>Clear</button>
    </div>
  );
}

Object.freeze(ResourceSelect);

export default ResourceSelect;
