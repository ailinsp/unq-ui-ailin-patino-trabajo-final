import React from 'react';
import unknown from './../pictures/unknown.jpg'
import lizard from './../pictures/lizard.jpg'
import paper from './../pictures/paper.jpg'
import rock from './../pictures/rock.jpg'
import scissors from './../pictures/scissors.jpg'
import spock from './../pictures/spock.jpg'


const GameResult= ({result, playerOneChoice, playerTwoChoice}) => {

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

            <div style={{display: "flex", justifyContent: "center"}}>
                {!result && <h1>VS</h1>}
                {result && <p>{result.message}</p>}
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img style={{width:'110px', height:'110px', paddingRight: "30px"}} src={playerOneChoice ? picture(playerOneChoice) : unknown} alt='player one' />
                <img style={{width:'110px', height:'110px', paddingLeft: "30px"}} src={playerTwoChoice ? picture(playerTwoChoice) : unknown} alt='player two'/>
            </div>

        </div>
    )
}

export default GameResult;

