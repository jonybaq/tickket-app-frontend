import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useHideMenu } from '../hooks/useHideMenu';
const { Title, Text } = Typography;
export const TickePage = () => {
    useHideMenu(true);
    const {socket} = useContext(AppContext);
    const nuevoTicket=()=>{
        socket.emit('nuevoTicket',null,(numero)=>{
            setstate(numero);
        });
    }
    const [state, setstate] = useState(0);
    
    console.log(`entra`);
    return (
        <>
           <Row>
               <Col span={14} offset={4} align="center">
                   <Title level={3}>Presione el Boton para un nuevo Ticket</Title>
                   <Button
                   type="primary" shape="round" size="large" onClick={nuevoTicket}>
                       <DownloadOutlined/>
                       Nuevo Ticket
                   </Button>
               </Col>
           </Row>
           <Row style={{marginTop:100}}>
               <Col span={14} offset={4} align="center" >
                   <Text level={2}>
                       Su Número: 
                   </Text>
                   <br/>
                   <Text type="success" style={{fontSize:55, fontWeight:'bold'}}>
                    {state!==0&&state}
                   </Text>
               </Col>
            </Row>
        </>
    )
}
