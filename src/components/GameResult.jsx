import React from 'react';
import unknown from './../pictures/unknown.jpg'
import lizard from './../pictures/lizard.jpg'
import paper from './../pictures/paper.jpg'
import rock from './../pictures/rock.jpg'
import scissors from './../pictures/scissors.jpg'
import spock from './../pictures/spock.jpg'
import vs from './../pictures/vs.jpg'
import p1score from './../pictures/p1score.jpg'
import p2score from './../pictures/p2score.jpg'


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
                
                <div style={{height: "100px"}}>

                        <img style={{width:'110px', height:'110px'}} src={playerOneChoice ? picture(playerOneChoice) : unknown} alt='player one'/>
                        
                        <div style={{height: "10px"}}>
                            <h2> {isReadyPlayer1} </h2>
                        </div>                    
                        
                        <div style={{height: "50px", paddingTop: "25px"}}>
                            <img style={{width:'100px', height:'47px', marginTop:"30px"}} src={p1score} alt="vs"/>
                            <h1> {playerOneScore} </h1>
                        </div>

                </div>

                <img style={{width:'90px', height:'83px', padding:"20px"}} src={vs} alt="vs"/>

                <div style={{height: "100px"}}>
                    <img style={{width:'110px', height:'110px'}} src={playerTwoChoice ? picture(playerTwoChoice) : unknown} alt='player two'/>
                    <div style={{height: "10px"}}>
                        <h2> {isReadyPlayer2} </h2>
                    </div>

                    <div style={{height: "50px", paddingTop: "25px"}}>
                        <img style={{width:'100px', height:'47px', marginTop:"30px"}} src={p2score} alt="vs"/>
                        <h1> {playerTwoScore} </h1>
                    </div>
                </div>
            </div>
            
            <div style={{display: "flex", justifyContent: "center", minHeight: "100px", color:"white"}}>
                {!result}
                {result && <h2>{result.message}</h2>}
            </div>

        </div>
    )
}

export default GameResult;

