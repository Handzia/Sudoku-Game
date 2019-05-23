import React from 'react';
import './css/Tile.css';


const Tile = (props) => {
    let tile;
    if (props.tile === '.') {
        tile = '';
    } else {
        tile = props.tile;
    }

    if (props.initialTile === '.') {
        return(
            <div className="Tile">
                <input
                    className="Tile-input"
                    type="number"
                    min="1"
                    max="9"
                    onChange={(e) => props.handleChange(e.target.value)}
                    value={tile}
                />
            </div>
        )
    } else {
        return(
            <div className="Tile">
                <input
                    className="Tile-input Disabled-input"
                    type="number"
                    value={tile}
                    disabled
                />
            </div>
        )
    }    
};

export default Tile;