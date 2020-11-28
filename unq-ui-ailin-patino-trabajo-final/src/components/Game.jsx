import { Row } from 'antd';
import React from 'react';
import Options from './Options';


function Game(){
    const handleSelect = () => {
    }

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}> score player 1</div>
            <div>
                <Options setAnItem={handleSelect}/>
            </div>
            <div style={{width: "500px", textAlign: "center"}} >
                result
            </div>
            <div >
                <Options setAnItem={handleSelect}/>
            </div>
            <div style={{textAlign: "center"}}> score player 2</div>

        </div>
    )
}

export default Game;