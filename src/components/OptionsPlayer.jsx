import React from 'react';
import lizard from './../pictures/lizard.jpg'
import paper from './../pictures/paper.jpg'
import rock from './../pictures/rock.jpg'
import scissors from './../pictures/scissors.jpg'
import spock from './../pictures/spock.jpg'
import player1 from './../pictures/player1.jpg'
import player2 from './../pictures/player2.jpg'


const OptionsPlayer = ({setAnOption, playerRole}) => {

    const player = (type) => {
        if (type === "player1"){
            return player1
        }
        if (type === "player2"){
            return player2
        }
    }

    return (
        <div style= {{paddingTop: "40px"}}>

            <img src={player(playerRole)} alt='' style={{width:'110px', height:'48px'}}/> 

            <div onClick={() => setAnOption('rock')}>
                <img src={rock} alt='rock' style={{width:'110px',height:'110px', cursor: "pointer"}}/>
            </div>
            
            <div onClick={() => setAnOption('paper')}>
                <img src={paper} alt='paper' style={{width:'110px',height:'110px', cursor: "pointer"}}/>
            </div>
            
            <div onClick={() => setAnOption('scissors')}>
                <img src={scissors} alt='scissors'style={{width:'110px',height:'110px', cursor: "pointer"}}/> 
            </div>

            <div onClick={() => setAnOption('lizard')}>
                <img src={lizard} alt='lizard'style={{width:'110px',height:'110px', cursor: "pointer"}} /> 
            </div>

            <div onClick={() => setAnOption('spock')}>
                <img src={spock} alt='spock' style={{width:'110px',height:'110px', cursor: "pointer"}}/> 
            </div>

        </div>
    )
}

export default OptionsPlayer;