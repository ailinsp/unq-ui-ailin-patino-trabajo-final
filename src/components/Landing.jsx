import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './../pictures/rpslsLogo.jpg'
import rules from './../pictures/rules.jpg'
import onePlayer from './../pictures/onePlayer.jpg'
import twoPlayers from './../pictures/twoPlayers.jpg'


function Landing(){
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '50vh',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '50px',
            }}> 

            <img alt={""} src={logo} style={{width:'662px', height:'254px'}}/>
            
            <NavLink to={`/rules`}>
                <img alt={""} src={rules} style={{width:'400px',height:'66px', paddingTop:"50px", padding:'10px' }}/>
            </NavLink>

            <NavLink to={`/onePlayer`}>
                <img alt={""} src={onePlayer} style={{width:'400px',height:'66px', padding:'10px' }}/>
            </NavLink>

            <NavLink to={`/twoPlayers`}>
                <img alt={""} src={twoPlayers} style={{width:'400px',height:'66px', padding:'10px' }}/>
            </NavLink>

        </div>
    )
}

export default Landing;