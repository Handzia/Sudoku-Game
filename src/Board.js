import React from 'react';
import Tile from './Tile';
import './css/Board.css';

const Board = props => {
    let tiles = props.board.split('').map((tile, i) => <Tile tile={tile} key={i} />);
    console.log(tiles);

    return (
        <div className="Board" tiles={tiles}>    
            {tiles}
        </div>
    )        
};

export default Board;