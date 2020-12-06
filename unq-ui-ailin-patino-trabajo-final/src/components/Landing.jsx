import React from 'react';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom';
import rules from './../pictures/rules.jpg'
import play from './../pictures/play.jpg'



function Landing(){
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '80vh',
            alignItems: 'center',
            justifyContent: 'center'
            }}> 

            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6} >
                    <NavLink to={`/rules`}>
                        <img alt={""} src={rules} style={{width:'200px',height:'77px'}}/>
                    </NavLink>
                </Col>
                <Col className="gutter-row" span={6} >

                    <NavLink to={`/play`}>
                        <img alt={""} src={play} style={{width:'200px',height:'77px'}}/>
                    </NavLink>
                </Col>
            </Row>

        </div>
    )
}

export default Landing;