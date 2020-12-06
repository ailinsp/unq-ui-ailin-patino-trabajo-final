import React from 'react';
import unknown from './../pictures/unknown.jpg'


const GameResult= ({result, playerOneChoice, playerTwoChoice}) => {

    return(
        <div style={{display: "flex", justifyContent: "center"}}>

            <div style={{paddingRight: "200px"}}>
                <h3>Player 1</h3>
                    {<img src={playerOneChoice ? `./../pictures/${playerOneChoice}.jpg` : {unknown}}
                        alt='player one' />}
            </div>

            <div>
                {!result && <h1>VS</h1>}
                {result && <p>{result.message}</p>}
            </div>

            <div style={{paddingLeft: "200px"}}>
                <h3>Player 2</h3>
                    <img src={playerTwoChoice ? `./../pictures/${playerTwoChoice}.jpg` : {unknown}}
                        alt='player two'/>
            </div>

            
        </div>
    )
}

export default GameResult;