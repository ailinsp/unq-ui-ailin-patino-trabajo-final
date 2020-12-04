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

    const handleSelect = (option) => {
        setResult(null);
        setPlayerOneChoice(option);
        setRandomChoice(randomChoiceGenerator());
    }

    return(
        <div style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>

            <div style={{textAlign: "center"}}> score player 1</div>

            <div>
                <Options setAnOption={handleSelect}/>                
            </div>

            <div style={{display: "flex", justifyContent: "center",minWidth:"800px"}}>
                <GameResult result={result} playerOneChoice={playerOneChoice}
                       playerTwoChoice={randomChoice} />

                <Button  onClick={() => play()}>
                        
                </Button>
            </div>

            
            <div >
                <Options setAnOption={handleSelect}/>
            </div>

            <div style={{textAlign: "center"}}> score player 2</div>

        </div>
    )
}

export default Game;