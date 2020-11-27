import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';
import logo from './../pictures/RPSLSlogo.jpg'


function Navbar(){

    return(
        <Menu mode="horizontal" style={{backgroundColor:'#2b2a28', boxShadow:'0 15px 6px -6px #222', minHeight:'80px'}}>
            <Menu.Item  style={{display:'flex', justifyContent:'left', alignItems:'center'}}>
                <NavLink to="/" >
                    <div style={{justifyContent:'center'}}> 
                        <img src={logo} style={{width:'200px',height:'77px'}}/>
                    </div>
                </NavLink>
            </Menu.Item>
        </Menu>

    )
}

export default Navbar;