import React from 'react';
import Tile from './Tile';
import './css/Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            initialBoard: this.props.initialBoard,
            board: this.props.board
        };
    }

    render(){
        let initialTiles = this.state.initialBoard.split('');
        let tiles = this.state.board.split('').map((tile, i) => 
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