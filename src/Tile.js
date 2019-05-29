import React from 'react';
import './css/Tile.css';

const Tile = ({tile, initialTile, handleChange}) => {
    let tileValue;
    let disabled;
    tile === '.' ? tileValue = '' : tileValue = tile;
    initialTile === '.' ? disabled = false : disabled = true;

    return (
        <div className="Tile">
            <input
                className={`Tile-input ${initialTile === '.' ? '' : 'Disabled-input'}`}
                type="number"
                min="1"
                max="9"
                onChange={(e) => handleChange(e.target.value)}
                value={tileValue}
                disabled={disabled}
            />
        </div>
    )   
};

export default Tile;