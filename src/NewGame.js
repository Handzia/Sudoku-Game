import React from 'react';
import './css/NewGame.css';


const NewGame = ({level, chooseLevel, getNewBoard}) => {
    
    return (
        <div className="NewGame-wrapper">
            <div className="Levels">
                <button
                    className={`Level-button ${level === 'easy' ? 'Active' : ''}`}
                    onClick={() => chooseLevel('easy')}
                >easy</button>
                <button
                    className={`Level-button ${level === 'medium' ? 'Active' : ''}`}
                    onClick={() => chooseLevel('medium')}
                >medium</button>
                <button
                    className={`Level-button ${level === 'hard' ? 'Active' : ''}`}
                    onClick={() => chooseLevel('hard')}
                >hard</button>         
            </div>
            
            <button className="App-button" onClick={getNewBoard}>New Game</button>
        </div>
    )
};

export default NewGame;