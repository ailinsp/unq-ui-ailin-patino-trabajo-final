import React, { useState }  from 'react';
import GameResult from './GameResult';
import Options from './Options';
import Play from './Play';
import { Button } from 'antd';


function Game(){

    const [playerOneChoice, setPlayerOneChoice] = useState(null);
    const [randomChoice, setRandomChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const randomChoiceGenerator = () => {
        const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        const randomNumber = Math.floor(Math.random() * options.length);
        return options[randomNumber];
    }

    const play = () => {
        const result = Play.startGame(playerOneChoice, randomChoice);
        setResult(result);
        if (result.finish==='won') setPlayerOneScore(playerOneScore+1); 
        if (result.finish==='lost') setComputerScore(computerScore+1);
    }

    const reset = () => {
        setPlayerOneChoice(null);
        setRandomChoice(null);
        setResult(null);
        setPlayerOneScore(0);
        setComputerScore(0)
    }

    const handleSelect = (option) => {
        setResult(null);
        setPlayerOneChoice(option);
        setRandomChoice(randomChoiceGenerator());
    }

    return(
        <div style={{display: "flex", justifyContent: "center", paddingTop: "80px"}}>

            <div>
                <Options setAnOption={handleSelect}/>                
            </div>

            <div style={{justifyContent: "center", minWidth:"800px"}}>
                <GameResult result={result} playerOneChoice={playerOneChoice}
                       playerTwoChoice={randomChoice} />

                <div style={{ display: "flex", justifyContent: "center"}}>
                    <Button  onClick={() => play()}> PLAY! </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <Button  onClick={() => reset()}> RESET GAME </Button>
                </div>
            </div>

            <div >
                <Options setAnOption={handleSelect}/>
            </div>

    
        </div>
    )
}

export default Game;