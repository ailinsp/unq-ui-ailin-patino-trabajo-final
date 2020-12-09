import React from 'react';
import {NavLink} from 'react-router-dom';
import rules from './../pictures/rpslsExplained.jpg'
import back from './../pictures/back.jpg'

function Rules(){
    
    return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: "20px"
                }}> 

                <img alt={""} src={rules} style={{width:'1200px',height:'639px'}}/>

                <NavLink style={{ display: "flex", justifyContent: "center"}} to={`/`}>
                    <img style={{width:'300px', height:'49px', cursor: "pointer"}} src={back} alt=""/>
                </NavLink>

            </div>
    )
}

export default Rules;