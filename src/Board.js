import React from 'react';
import Tile from './Tile';
import './css/Board.css';

const Board = ({board, initialBoard, updateBoard}) => {
    let initialTiles = initialBoard.split('');
    let tiles = board;
    if (tiles === '') {
        for(let n=0; n<81; n++) {
            tiles += '.';
        }    
    }
    tiles = tiles.split('').map((tile, i) =>
        <Tile 
            tile={tile}
            initialTile={initialTiles[i]}
            handleChange={(tile) => updateBoard(tile, i)}
            key={i}
        />
    );

    return (
        <div className="Board">    
            {tiles}
        </div>
    )  
};


export default Board;