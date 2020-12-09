import React, { useState }  from 'react';
import {NavLink} from 'react-router-dom';
import Play from './Play';
import GameResult from './GameResult';
import OptionsPlayer from './OptionsPlayer';
import OptionsDisabled from './OptionsDisabled';
import restartGame from './../pictures/restartGame.jpg'
import start from './../pictures/play.jpg'
import back from './../pictures/back.jpg'


function OnePlayer(){

    const [playerOneChoice, setPlayerOneChoice] = useState(null);
    const [randomChoice, setRandomChoice] = useState(null);
    const [randomChoiceView, setRandomChoiceView] = useState(null);
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
        setRandomChoiceView(randomChoice)
    }

    const reset = () => {
        setPlayerOneChoice(null);
        setRandomChoice(null);
        setRandomChoiceView(null);
        setResult(null);
        setPlayerOneScore(0);
        setComputerScore(0)
    }

    const handleSelect = (option) => {
        setRandomChoiceView(null);
        setResult(null);
        setPlayerOneChoice(option);
        setRandomChoice(randomChoiceGenerator());
    }

    return(
        <div style={{display: "flex", justifyContent: "center"}}>

            <div>
                <OptionsPlayer setAnOption={handleSelect} playerRole={"player1"}/>
            </div>

            <div style={{justifyContent: "center", minWidth:"800px"}}>

                <GameResult result={result} playerOneChoice={playerOneChoice} playerTwoChoice={randomChoiceView} 
                            playerOneScore={playerOneScore} playerTwoScore={computerScore}/>

                <div style={{paddingTop: "120px"}}>

                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <img style={{width:'400px', height:'66px', cursor: "pointer"}} src={start} alt="" onClick={() => play()}/>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", paddingTop:"90px"}}>
                        <img style={{width:'200px', height:'32px', cursor: "pointer"}} src={restartGame} alt="" onClick={() => reset()}/>
                    </div>

                    <NavLink style={{ display: "flex", justifyContent: "center", paddingTop: "10px"}} to={`/`}>
                        <img style={{width:'200px', height:'32px', cursor: "pointer"}} src={back} alt=""/>
                    </NavLink>
                    
                </div>

            </div>

            <div >
                <OptionsDisabled/>
            </div>

        </div>
    )
}

export default OnePlayer;