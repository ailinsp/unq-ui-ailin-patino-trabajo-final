import React from 'react';
import lizard from './../pictures/LIZARD.jpg'
import paper from './../pictures/PAPER.jpg'
import rock from './../pictures/ROCK.jpg'
import scissors from './../pictures/SCISSORS.jpg'
import spock from './../pictures/SPOCK.jpg'

const Options = ({setAnOption}) => {

    return (
        <div>
            <div onClick={() => {}}>
                <img src={rock} alt='rock' style={{width:'110px',height:'110px'}}/>
            </div>
            
            <div onClick={() => {}}>
                <img src={paper} alt='paper' style={{width:'110px',height:'110px'}}/>
            </div>
            
            <div onClick={() => {}}>
                <img src={scissors} alt='scissors'style={{width:'110px',height:'110px'}}/> 
            </div>

            <div onClick={() => {}}>
                <img src={lizard} alt='lizard'style={{width:'110px',height:'110px'}} /> 
            </div>

            <div onClick={() => {}}>
                <img src={spock} alt='spock' style={{width:'110px',height:'110px'}}/> 
            </div>
        </div>
    )
}

export default Options;