import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { AppContext } from '../context/AppContext';
import { getUltimos } from '../helpers/getUltimos';
const {  Text } = Typography;

export const ColaPage = () => {
    useHideMenu(true);
    const [data, setData] = useState([]);
    const { socket } = useContext(AppContext);
    useEffect(() => {
        //socket.emit('tickets');
        socket.on('tickets-asignados',(datos)=>{
            setData(datos);
        });
        return () => {
            socket.off('tickets-asignados');
        }
    }, [socket]);
    useEffect(() => {
        getUltimos().then((data)=>{
            console.log(`data`, data);
            setData(data.ultimos);
        });
    }, []);

    return (
        <>

            <Row>
                <Col span={11}>
                    <Divider>Atendiendo al Cliente</Divider>
                    <List dataSource={data.slice(0, 4)} renderItem={item => (
                        <List.Item style={{ textAlign: 'center'}} >
                            <Card style={{ width: '50vh' }}
                                actions={[
                                    <Tag color="volcano" >{item.agente}</Tag>,
                                    <Tag color="magenta" style={{ fontSize: 18 }}>Cubiculo: {item.cubiculo}</Tag>
                                ]
                                }
                            >
                                <Text style={{fontSize: 32, marginTop: 0, fontWeight: 'bold' }} level={5} >No. {item.numero}</Text>

                            </Card>
                        </List.Item>
                    )} />
                </Col>
                <Col span={11} style={{marginLeft:20}}>
                    <Divider>Historial</Divider>
                    <List dataSource={data.slice(4,10)}
                     renderItem={item => (
                        <List.Item style={{ textAlign: 'center'}} >
                            <List.Item.Meta
                                title={`Ticket No. ${item.numero}`}
                                description={
                                    <>
                                    <Text type='secondary'>En el cubiculo: </Text>
                                    <Tag color="magenta" style={{ fontSize: 18 }}>{item.cubiculo}</Tag>
                                    <Text type='secondary'>Agente: </Text>
                                    <Tag color="volcano" >{item.agente}</Tag>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                    />
                </Col>
            </Row>
        </>
    )
}
