import React, { useState }  from 'react';
import {NavLink} from 'react-router-dom';
import GameResult from './GameResult';
import OptionsPlayer from './OptionsPlayer';
import Play from './Play';
import start from './../pictures/play.jpg'
import restartGame from './../pictures/restartGame.jpg'
import back from './../pictures/back.jpg'


function TwoPlayers(){

    const [playerOneChoice, setPlayerOneChoice] = useState(null);
    const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
    const [playerOneChoiceView, setPlayerOneChoiceView] = useState(null);
    const [playerTwoChoiceView, setPlayerTwoChoiceView] = useState(null);
    const [result, setResult] = useState(null);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [isReadyPlayer1, setIsReadyPlayer1] = useState(null);
    const [isReadyPlayer2, setIsReadyPlayer2] = useState(null);

    const play = () => {
        if(playerOneChoice && playerTwoChoice){

            const result = Play.startGame(playerOneChoice, playerTwoChoice);
            setResult(result);

            if (result.finish==='won') setPlayerOneScore(playerOneScore+1); 
            if (result.finish==='lost') setPlayerTwoScore(playerTwoScore+1);
            
            setPlayerOneChoiceView(playerOneChoice)
            setPlayerTwoChoiceView(playerTwoChoice) 
            setIsReadyPlayer1(null)
            setIsReadyPlayer2(null)
            setPlayerOneChoice(null)
            setPlayerTwoChoice(null)
        }
    }

    const reset = () => {
        setPlayerOneChoice(null);
        setPlayerTwoChoice(null);
        setPlayerOneChoiceView(null);
        setPlayerTwoChoiceView(null);
        setResult(null);
        setPlayerOneScore(0);
        setPlayerTwoScore(0)
        setIsReadyPlayer1(null)
        setIsReadyPlayer2(null)
    }

    const handleSelectPlayer1 = (option) => {
        setResult(null);
        setPlayerOneChoice(option);
        setPlayerOneChoiceView(null);
        setPlayerTwoChoiceView(null);
        setIsReadyPlayer1("Ready!")
    }

    const handleSelectPlayer2 = (option) => {
        setResult(null);
        setPlayerTwoChoice(option);
        setPlayerOneChoiceView(null);
        setPlayerTwoChoiceView(null);
        setIsReadyPlayer2("Ready!")
    }
    
    return(
        <div style={{display: "flex", justifyContent: "center"}}>

            <div>
                <OptionsPlayer setAnOption={handleSelectPlayer1} playerRole={"player1"}/>
            </div>

            <div style={{justifyContent: "center", minWidth:"800px"}}>

                <GameResult result={result} playerOneChoice={playerOneChoiceView} playerTwoChoice={playerTwoChoiceView} 
                            playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} 
                            isReadyPlayer1={isReadyPlayer1} isReadyPlayer2={isReadyPlayer2}/>

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
                <OptionsPlayer setAnOption={handleSelectPlayer2} playerRole={"player2"}/>
            </div>

        </div>
    )
}

export default TwoPlayers;