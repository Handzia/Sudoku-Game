import React from 'react';
import Board from './Board';
import './css/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initialBoard: '',
            board: '123456789012345678901234567890123456789012345678901234567890123456789012345678901'
        };
    }

    render(){
        return(
            <div className="App">
                <h1>SUDOKU</h1>
                <Board board={this.state.board} />
                <div className="Buttons-wrapper">
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        )
    }    
};


export default App;
