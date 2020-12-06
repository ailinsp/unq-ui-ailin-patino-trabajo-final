import React from 'react';
import rules from './../pictures/rpslsExplained.jpg'
import { List, Typography } from 'antd';



function Rules(){
    const data = [
        'Tijera corta a Papel',
        'Papel tapa a Piedra',
        'Piedra aplasta a Lagarto',
        'Lagarto envenena a Spock',
        'Spock rompe a Tijera',
        'Tijera decapita a Lagarto',
        'Lagarto devora a Papel',
        'Papel desautoriza a Spock',
        'Spock vaporiza a Piedra',
        'y como siempre, Piedra aplasta a Tijera'
      ];
      
    
    return(
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}> 
                <img alt={""} src={rules} style={{width:'500px',height:'500px'}}/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text></Typography.Text> {item}
                        </List.Item>
                        )}
                />
                

            </div>
        </div>
    )
}

export default Rules;