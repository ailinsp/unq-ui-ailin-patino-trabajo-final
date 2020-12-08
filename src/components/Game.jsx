import React, { useState }  from 'react';
import {NavLink} from 'react-router-dom';
import GameResult from './GameResult';
import OptionsPlayer from './OptionsPlayer';
import OptionsDisabled from './OptionsDisabled';
import Play from './Play';
import showResult from './../pictures/showResult.jpg'
import restartGame from './../pictures/restartGame.jpg'
import back from './../pictures/back.jpg'



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
        if(playerOneChoice){
            const result = Play.startGame(playerOneChoice, randomChoice);
            setResult(result);
            if (result.finish==='won') setPlayerOneScore(playerOneScore+1); 
            if (result.finish==='lost') setComputerScore(computerScore+1); 
        }
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
                <OptionsPlayer setAnOption={handleSelect}/>                
            </div>

            <div style={{justifyContent: "center", minWidth:"800px"}}>

                <GameResult result={result} playerOneChoice={playerOneChoice} playerTwoChoice={randomChoice} />

                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer"}}>
                    <img style={{width:'400px', height:'66px'}} src={showResult} alt="" onClick={() => play()}/>
                </div>

                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer"}}>
                    <img style={{width:'400px', height:'66px'}} src={restartGame} alt="" onClick={() => reset()}/>
                </div>

                <NavLink style={{ display: "flex", justifyContent: "center", cursor: "pointer"}} to={`/`}>
                    <img style={{width:'400px', height:'66px'}} src={back} alt=""/>
                </NavLink>

            </div>

            <div >
                <OptionsDisabled/>
            </div>

    
        </div>
    )
}

export default Game;