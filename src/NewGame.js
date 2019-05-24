import React from 'react';
import './css/NewGame.css';


const NewGame = (props) => {
    
    return (
        <div className="NewGame-wrapper">
            <div className="Levels">
                <button
                    className={"Level-button" + " " + (props.level === 'easy' ? 'Active' : '')}
                    onClick={() => props.chooseLevel('easy')}
                >easy</button>
                <button
                    className={"Level-button" + " " + (props.level === 'medium' ? 'Active' : '')}
                    onClick={() => props.chooseLevel('medium')}
                >medium</button>
                <button
                    className={"Level-button" + " " + (props.level === 'hard' ? 'Active' : '')}
                    onClick={() => props.chooseLevel('hard')}
                >hard</button>         
            </div>
            
            <button className="App-button" onClick={props.getNewBoard}>New Game</button>
        </div>
    )
};

export default NewGame;