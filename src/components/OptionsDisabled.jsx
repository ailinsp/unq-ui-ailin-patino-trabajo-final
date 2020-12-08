import React from 'react';
import lizard from './../pictures/lizard.jpg'
import paper from './../pictures/paper.jpg'
import rock from './../pictures/rock.jpg'
import scissors from './../pictures/scissors.jpg'
import spock from './../pictures/spock.jpg'
import computer from './../pictures/computer.jpg'


const OptionsDisabled = () => {

    return (
        <div style= {{paddingTop: "40px"}}>

            <img src={computer} alt='' style={{width:'110px', height:'48px'}}/> 

            <div>
                <img src={rock} alt='rock' style={{width:'110px',height:'110px'}}/>
            </div>
            
            <div>
                <img src={paper} alt='paper' style={{width:'110px',height:'110px'}}/>
            </div>
            
            <div>
                <img src={scissors} alt='scissors'style={{width:'110px',height:'110px'}}/> 
            </div>

            <div>
                <img src={lizard} alt='lizard'style={{width:'110px',height:'110px'}} /> 
            </div>

            <div>
                <img src={spock} alt='spock' style={{width:'110px',height:'110px'}}/> 
            </div>
        </div>
    )
}

export default OptionsDisabled;