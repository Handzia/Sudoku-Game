import React from 'react';
import sudoku from 'sudoku-umd';
import NewGame from './NewGame';
import Board from './Board';
import Alert from './Alert';
import './css/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.updateBoard = this.updateBoard.bind(this);
        this.getNewBoard = this.getNewBoard.bind(this);
        this.restart = this.restart.bind(this);
        this.solve = this.solve.bind(this);
        this.check = this.check.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.chooseLevel = this.chooseLevel.bind(this);
        
        this.state = {
            initialBoard: '',
            board: '',
            level: 'easy',
            showAlert: false,
            alertText: ''
        };
    }

    chooseLevel(level){        
        this.setState({level});
    }

    getNewBoard() {
        const newBoard = sudoku.generate(this.state.level);
        this.setState({
            initialBoard: newBoard,
            board: newBoard
        });
    }

    updateBoard(tile, index){
        let tileValue = tile;
        
        if (tile === '') {
            tileValue = '.';
        };
            
        if (tileValue > 9) {
            tileValue = tileValue.charAt(0);
        };

        if (tileValue == 0) {
            this.setState({
                showAlert: true,
                alertText: 'Uncorrect number!'
            });
            tileValue = '.';
        }

        let tiles = this.state.board.split('');
        tiles.splice(index, 1, tileValue);
        this.setState({board: tiles.join().replace(/,/g, '')});
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
        } else {
            this.setState({
                showAlert: true,
                alertText: 'This sudoku can\'t be solved! Correct your numbers and try again.'
            });
        }    
    }
    check(){
        if (sudoku.solve(this.state.board)) {
            let alertText;
            this.state.board.length === this.state.board.replace('.', '').length ? alertText = 'Congratulations!!! You won!' : alertText = 'All is correct. Keep going!';

            this.setState({
                showAlert: true,
                alertText
            });
        } else {
            this.setState({
                showAlert: true,
                alertText: 'Correct your numbers! Something went wrong...'
            });
        }
    }
    hideAlert(){
       this.setState({
            showAlert: false,
            alertText: ''
        }); 
    }

    render(){
        return(
            <div className="App">
                <div className="App-container">
                    <h1>Sudoku</h1>
                    
                    <NewGame 
                        level={this.state.level}
                        chooseLevel={this.chooseLevel}
                        getNewBoard={this.getNewBoard}
                    />
                    <Board 
                        board={this.state.board}
                        initialBoard={this.state.initialBoard}
                        updateBoard={this.updateBoard}
                    />
                    <div className="Buttons-wrapper">
                        <button className="App-button" onClick={this.check}>Check</button>
                        <button className="App-button" onClick={this.solve}>Solve</button>
                        <button className="App-button" onClick={this.restart}>Restart</button>
                    </div>
                    
                    <Alert
                        showAlert={this.state.showAlert}
                        alertText={this.state.alertText}
                        hideAlert={this.hideAlert}
                    />
                </div>
            </div>
        )
    }    
};


export default App;
