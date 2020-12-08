import React from 'react';
import unknown from './../pictures/unknown.jpg'
import lizard from './../pictures/lizard.jpg'
import paper from './../pictures/paper.jpg'
import rock from './../pictures/rock.jpg'
import scissors from './../pictures/scissors.jpg'
import spock from './../pictures/spock.jpg'


const GameResult= ({result, playerOneChoice, playerTwoChoice, playerOneScore, playerTwoScore, isReadyPlayer1, isReadyPlayer2}) => {

    const picture = (choice) => {
        if (choice === "rock"){
            return rock
        }
        if (choice === "paper"){
            return paper
        }
        if (choice === "scissors"){
            return scissors
        }
        if (choice === "lizard"){
            return lizard
        }
        if (choice === "spock"){
            return spock
        }
    }

    return(
        <div>

            <div style={{display: "flex", justifyContent: "center", paddingTop: "100px", textAlign: "center", color: "white"}}>
                
                <div>
                    <h2> {isReadyPlayer1} </h2>
                    <img style={{width:'110px', height:'110px'}} src={playerOneChoice ? picture(playerOneChoice) : unknown} alt='player one'/>
                    <h2>SCORE</h2>
                    <h1> {playerOneScore} </h1>
                </div>

                <h1 style={{width:'150px'}}>VS</h1>

                <div>
                    <h2> {isReadyPlayer2} </h2>
                    <img style={{width:'110px', height:'110px'}} src={playerTwoChoice ? picture(playerTwoChoice) : unknown} alt='player two'/>
                    <h2>SCORE</h2>
                    <h1> {playerTwoScore} </h1>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", minHeight: "100px", color:"white"}}>
                {!result}
                {result && <h1>{result.message}</h1>}
            </div>

        </div>
    )
}

export default GameResult;

