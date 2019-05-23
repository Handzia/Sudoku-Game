import React from 'react';
import Tile from './Tile';
import './css/Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: this.props.board
        };
    }

    render(){
        let tiles = this.state.board.split('').map((tile, i) => {
            return <Tile tile={tile} handleChange={(tile) => this.props.updateBoard(tile, i)} key={i} />
        });

        return (
            <div className="Board">    
                {tiles}
            </div>
        )  
    }
};


export default Board;