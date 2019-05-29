import React from 'react';
import Tile from './Tile';
import './css/Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let initialTiles = this.props.initialBoard.split('');
        let tiles = this.props.board;
        if (tiles === '') {
            for(let n=0; n<81; n++) {
                tiles += '.';
            }    
        }
        tiles = tiles.split('').map((tile, i) =>
            <Tile 
                tile={tile}
                initialTile={initialTiles[i]}
                handleChange={(tile) => this.props.updateBoard(tile, i)}
                key={i}
            />
        );

        return (
            <div className="Board">    
                {tiles}
            </div>
        )  
    }
};


export default Board;