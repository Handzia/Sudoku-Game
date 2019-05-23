import React from 'react';
import sudoku from 'sudoku-umd';
import Board from './Board';
import './css/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        const firstBoard = sudoku.generate("easy");
        this.updateBoard = this.updateBoard.bind(this);
        this.state = {
            initialBoard: firstBoard,
            board: firstBoard
        };

    }
    getBoard() {
        const board = sudoku.generate("easy");
        this.setState({
            initialBoard: board,
            board: board
        });
        console.log(this.state.board);
    }
    updateBoard(tile, index){
        let tileValue = tile;
        if (tile === '') {
            tileValue = '.';
        };
        let tiles = this.state.board.split('');
        tiles.splice(index, 1, tileValue);
        this.setState({board: tiles.join().replace(/,/g, '')});
        console.log(this.state.board);
    }

    render(){
        return(
            <div className="App">
                <h1>SUDOKU</h1>
                <Board board={this.state.board} updateBoard={this.updateBoard}/>
                <div className="Buttons-wrapper">
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button onClick={() => this.getBoard()}>Restart</button>
                </div>
            </div>
        )
    }    
};


export default App;
