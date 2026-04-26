import { Handle, Position } from "@xyflow/react";
import "./IngredientUI.css";

/**
 * IngredientUI — a React Flow custom node for crafting recipe items.
 *
 * Expected `data` props:
 *   label    {string}  — display name shown below the icon
 *   image    {string}  — URL (or imported asset path) for the item sprite
 *   quantity {number}  — optional stack count shown in corner badge
 *   rarity   {string}  — 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
 */
export default function IngredientUI({ data, isConnectable }) {
  const { label, image, quantity, rarity = "common" } = data;

  return (
    <div className={`item-node item-node--${rarity}`}>
      {/* Incoming connection handle (top) */}
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="item-node__handle item-node__handle--target"
      />

      <div className="item-node__icon-wrap">
        {image ? (
          <img
            src={image}
            alt={label}
            className="item-node__icon"
            draggable={false}
          />
        ) : (
          /* Fallback placeholder when no image is provided */
          <div className="item-node__icon-placeholder">?</div>
        )}

        {/* Stack-count badge */}
        {quantity != null && quantity > 1 && (
          <span className="item-node__qty">×{quantity}</span>
        )}
      </div>

      <p className="item-node__label">{label}</p>

      {/* Outgoing connection handle (bottom) */}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="item-node__handle item-node__handle--source"
      />
    </div>
  );
}
