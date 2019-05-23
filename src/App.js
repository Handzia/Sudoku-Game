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

    getNewBoard() {
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

    restart(){
        this.setState({
            board: this.state.initialBoard
        });
    }

    solve(){
        const solvedBoard = sudoku.solve(this.state.board);
        if (solvedBoard) {
            this.setState({
                board: solvedBoard
            });
            console.log(solvedBoard);
        } else {
            console.log('ERROR');
        }    
    }
    check(){
        if (sudoku.solve(this.state.board)) {
            console.log('KEEP GOING!');
        } else {
            console.log('ERROR');
        }
    }

    render(){
        return(
            <div className="App">
                <h1>SUDOKU</h1>
                <Board 
                    board={this.state.board}
                    initialBoard={this.state.initialBoard}
                    updateBoard={this.updateBoard}
                />
                <div className="Buttons-wrapper">
                    <button onClick={() => this.check()}>Check</button>
                    <button onClick={() => this.getNewBoard()}>New Game</button>
                    <button onClick={() => this.solve()}>Solve</button>
                    <button onClick={() => this.restart()}>Restart</button>
                </div>
            </div>
        )
    }    
};


export default App;
