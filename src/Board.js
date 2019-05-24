import React from 'react';
import Tile from './Tile';
import './css/Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
    }
    addBorder(index){
        const borderRightTiles = [2, 5, 11, 14, 20, 23, 29, 32, 38, 41, 47, 50, 56, 59, 65, 68, 74, 77];
        const borderBottomTiles = [18, 19, 20, 21, 22, 23, 24, 25, 26, 45, 46, 47, 48, 49, 50, 51, 52, 53];
        let tileClassName = 'Tile';

        for (let x = 0; x < borderRightTiles.length; x++) {
            if (index === borderRightTiles[x]) {
                tileClassName = 'Tile Border-right';
            }
        };
        for (let x = 0; x < borderBottomTiles.length; x++) {
            if ((index === borderBottomTiles[x]) && (tileClassName === 'Tile Border-right')) {
                tileClassName = 'Tile Border-right Border-bottom';
            } else if ((index === borderBottomTiles[x]) && (tileClassName === 'Tile')) {
                tileClassName = 'Tile Border-bottom';
            }
        };

        return tileClassName;
    }

    render(){
        let initialTiles = this.props.initialBoard.split('');
        let tiles = this.props.board;
        if (tiles === '') {
            tiles = '.................................................................................';
        }
        tiles = tiles.split('').map((tile, i) =>
            <Tile 
                tile={tile}
                initialTile={initialTiles[i]}
                handleChange={(tile) => this.props.updateBoard(tile, i)}
                key={i}
                tileClassName={this.addBorder(i)}
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